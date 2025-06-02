import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
        </View>
    );
};



export const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
        </View>
    );
};

export const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView   {...props}
                contentContainerStyle={{backgroundColor: '4#CFAF50'}}>
                    {/* 프로필 영역 */}
                    <View style={styles.profileContainer}>
                        <Image source={{uri: 'https://picsum.photos/80'}} style={styles.profileImage} />
                        <Text style={styles.profileName}>홍길동</Text>
                        <Text style={styles.profileEmail}>one@gmail.com</Text>
                    </View>
                    <View style={{flex : 1, backgroundColor : '#fff', paddingTop : 10}}>
                        <DrawerItemList {...props} />
                    </View>
              
            </DrawerContentScrollView>
            <View style={styles.logoutContainer}>
                <Pressable onPress={() => alert('로그아웃')}><Text style={styles.logoutText}>로그아웃</Text></Pressable>
            </View>
        </View>
    )
}

export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    profileContainer : {
        padding : 20,
        alignItems: 'center'
    },
    profileImage : {
        width : 80,
        height: 80,
        borderRadius : 40,
        marginBottom : 10,
    },
    profileName : {
        color : '#fff',
        fontSize : 20,
        fontWeight : 'bold',
    },
    profileEmail : {
        color : '#fff',
        fontSize : 14,
    },
    logoutContainer : {
        padding : 20,
        borderTopWidth : 1,
        borderTopColor : '#ccc'
    },
    logoutText : {
        fontSize : 16,
        fontWeight : 'bold',
        color : '#e53935',
    },
});

