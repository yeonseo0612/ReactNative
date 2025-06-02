import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, ProfileScreen, CustomDrawer } from '../screens/DrawerScreen';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const HeaderRightButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginRight: 15 }}>
      <Ionicons name="menu" size={24} color="black" />
    </TouchableOpacity>
  );
};

const DrawerkNavigation = ({ screenOptions }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        ...screenOptions,
        headerRight: () => <HeaderRightButton />,
        headerLeft: () => null,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerkNavigation;