import {NAVER_CLIENT_ID, NAVER_CLIENT_SECRET} from '../constants/apiConfig'

const searchBooks = async (query) => {
    console.log(query);
     try {
      const res = await fetch(
         `https://openapi.naver.com/v1/search/book.json?query=${query}`,
        {
          headers: {
            'X-Naver-Client-Id': NAVER_CLIENT_ID,
            'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
export default searchBooks;