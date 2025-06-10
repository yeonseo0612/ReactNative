import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile, ChannelList } from "../screens";
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import { ThemeContext } from "styled-components";

const Tab = createBottomTabNavigator();

    //모든 탭에 대해 선택되면 tabAtiveColor로, 선택이 안되면 tabInactiveColor로 설정
    //각 스크린에 대해 아이콘 줘야한다.
    //TabBarIcon 이라는 컴포넌트를 만들고 매개변수로 {fouce,name}을 받는다
    // <MaterialIcons>를 반환한다 속성은 name,size는 26, color는

const TabBarIcon = ({ focused, name}) => {
        const theme = useContext(ThemeContext);
        return(
            <MaterialIcons
                name={name}
                size={26}
                color={focused ? theme.tabActiveColor : theme.tabInactiveColor}
            />
        )
    }
    
const MainTab = () => {

    const theme = useContext(ThemeContext);

    return(
          <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.tabActiveColor,
                tabInactiveColor: theme.tabInactiveColor,
            }}>
            <Tab.Screen 
                name="Channel List" 
                component={ChannelList} 
                options={{
                    tabBarIcon: ({focused}) =>
                        TabBarIcon({
                            focused,
                            name: focused ? 'chat-bubble' : 'chat-bubble-outline',
                        }),
                       headerRight: () =>
                    (
                        <MaterialIcons
                            name="add"
                            size={26}
                            style={{margin:10}}
                            onPress={() => navigation.navigate('Channel Creation')}
                        />
                    )

                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) =>
                        TabBarIcon({
                            focused,
                            name: focused ? 'person' : 'person-outline',
                        }),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTab;