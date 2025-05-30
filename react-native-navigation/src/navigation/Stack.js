import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import List from "../screens/List";
import Item from "../screens/Item";
import { Pressable, View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: '#fff' },
        headerStyle: {
          height: 110,
          backgroundColor: '#95a5a6',
          borderBottomWidth: 5,
          borderBottomColor: '#34495e',
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
        },
        headerTintColor: '#fff',
        headerBackTitle: '뒤로', // iOS에서만 보임
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="List"
        component={List}
        options={({ navigation }) => ({
          headerTitle: 'List Screen',
          headerTintColor: '#e74c3c',
          headerLeft: () => (
            <Pressable
              style={({ pressed }) => ({
                marginLeft: 10,
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={() => navigation.goBack()}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={28}
                  color="#e74c3c"
                />
                <Text style={{ color: '#e74c3c', marginLeft: 5 }}>이전으로</Text>
              </View>
            </Pressable>
          ),
        })}
      />

      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
};

export default StackNavigation;