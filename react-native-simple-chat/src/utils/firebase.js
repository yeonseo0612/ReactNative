import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile // 사용자 이름, 프로필 사진 업데이트 함수
} from "firebase/auth";

import config from '../../firebase.json';
import {collection} from 'firebase/firestore';
import {
  getStorage, //firebase와 연결된 storage객체를 불러온다
  ref, //Storage에 있는 파일이나 경로를 참조하는 객체
  uploadBytes, //Storage에 파일을 업로드해주는 함수
  getDownloadURL, //storage에 업로드된 파일의 다운로드 URL을 가져온다.
} from 'firebase/storage'

const app = initializeApp(config);

//getAuth
//현재 프로젝트에 대한 인증 서비스 객체만든다.
//이 객체를 통해 인증과 관련된 모든 작업(로그인, 회원가입, 로그아웃 등)을 하게된다.
const auth = getAuth(app);

//로그인 기능
export const login = async ({ email, password }) => {
  try {
    // Firebase Auth 함수 signInWithEmailAndPassword로 로그인
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // userCredential 객체 안에는 로그인된 사용자 정보가 들어 있음
    return userCredential.user;
  } catch (error) {
    console.error('Login error:', error);
    // 에러 발생 시 상위(호출부)로 에러를 던짐
    throw error;
  }                                                                                                                          
};

//회원가입 함수
export const signup = async({ email, password, name, photoUrl }) => {
  //이메일/비밀번호를 기반으로 firehbase의 auth에 사용자 등록
  //createUserWithEmailAndPassword함수는 이메일과 비밀번호만 인자로 받는데
  //어떻게 이름과 사진을 같이 저장할 수 있을까?
  //사용자 이름은 문자열로 입력할 수 있지만, 사진을 선택해서 받은 경로는 'file://...'로 시작
  //값을 가지고 있어 바로 사용할 수 없다.
  //사용자에 의해 선택한 사진을 firebase의 스토리지에 업로드해서 해결할 수 있다.
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  // 프로필 사진 URL 처리
  //https로 시작하면 그대로 사용, 아니면 스토리지에 업로드 후 url을 획득해서 사용
  const photoURL = await uploadImage(photoUrl);

  // 사용자 이름과 사진을 Firebase Auth에 업데이트
  await updateProfile(auth.currentUser, { displayName: name, photoURL });

  return user;
}

//사진을 firebase storage에 업로드하고 다운로드 URL을 리턴하는 함수
const uploadImage = async(uri) => {
  //이미 https로 시작하는 경우 바로 반환을 해라
  if (uri.startsWith('https')) {
    return uri;
  }

  //uri로부터 blob 객체를 생성한다 (이미지 파일의 바이너리 데이터)
  const response = await fetch(uri);
  const blob = await response.blob();

  const { uid } = auth.currentUser;

  const storage = getStorage(app);
  //스토리지에 저장할 파일 경로 설정
  const storageRef = ref(storage, `/profile/${uid}.photo.png`);

  //blob을 해당 경로로 업로드한다
  await uploadBytes(storageRef, blob, {
    contentType: 'image/png',
  });

  //업로드한 이미지의 다운로드 URL을 반환한다
  return await getDownloadURL(storageRef);
};

export const logout = async() => {
  return await auth.signOut();
}

// (3) 현재 로그인한 사용자 정보 가져오기
export const getCurrentUser = () => {
  // auth.currentUser가 로그인된 사용자 객체를 반환
  const { uid, displayName, email, photoURL } = auth.currentUser;
  console.log(`displayName: ${displayName}`);
  // 우리가 원하는 형태로 가공해서 반환
  return {
    uid,
    name: displayName,
    email,
    photoUrl: photoURL,
  };
};

// (4) 사용자 프로필 사진 업데이트
export const updateUserPhoto = async photoUrl => {

  // 현재 로그인한 사용자 객체

  const user = auth.currentUser;

  // 만약 photoUrl이 HTTPS로 시작하면 이미 URL이므로 그대로 사용
  // 그렇지 않으면 업로드 과정을 거친 뒤 Firebase Storage URL 획득

  const storageUrl = photoUrl.startsWith('https') ? photoUrl : await uploadImage(photoUrl);

  // Firebase Auth의 updateProfile로 프로필 사진 주소 수정

  await updateProfile(user, { photoURL: storageUrl });

  // 업데이트된 사용자 정보 반환
  return {
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
  };
};