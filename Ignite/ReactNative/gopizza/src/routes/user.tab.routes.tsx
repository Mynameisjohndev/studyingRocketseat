import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ButtomMenu from '@components/BottomMenu';
import Home from '@screens/Home';
import Orders from '@screens/Orders';

const { Navigator, Screen } = createBottomTabNavigator();

export function UserTabRoutes(){
    const { COLORS } = useTheme();
    return(
        <Navigator screenOptions={{
            tabBarActiveTintColor: COLORS.SECONDARY_900,
            tabBarInactiveTintColor: COLORS.SECONDARY_400,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { 
                height: 80,
                padding: Platform.OS === 'ios' ? 20 : 0,   
            }
        }}>
            <Screen 
            name='home' 
            component={Home}
            options={{
                tabBarIcon: ({ color }) => (
                    <ButtomMenu 
                    color={color} 
                    title="Cardápio"
                    />
                )
            }}
            />
            <Screen
            name='orders' 
            component={Orders}
            options={{
                tabBarIcon: ({ color }) => (
                    <ButtomMenu 
                    color={color} 
                    title="Cardápio"
                    notifications='2'
                    />
                )
            }}
            />
        </Navigator>
    )
}