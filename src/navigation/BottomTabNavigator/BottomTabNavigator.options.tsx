import React from 'react';
import { Text } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import COLORS from '@constants/COLORS';

export const BottomTabNavigatorOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: {
        backgroundColor: COLORS.MAIN_BLUE,
        borderTopWidth: 0,
        paddingHorizontal: 15,
        marginTop: 10
    },
    tabBarLabelStyle: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: 9
    }
};

export const ProfileTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <Text style={{ fontSize: focused ? 26 : 22 }}>🙎‍♂️</Text>
    )
};

export const SwipeTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'ChatList',
    tabBarIcon: ({ focused }) => (
        <Text style={{ fontSize: focused ? 25 : 20 }}>🔍</Text>
    )
};

export const MessagesTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: ({ focused }) => (
        <Text style={{ fontSize: focused ? 25 : 20 }}>💬</Text>
    )
};

export const EventsTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Close friends',
    tabBarIcon: ({ focused }) => (
        <Text style={{ fontSize: focused ? 25 : 20 }}>🎉</Text>
    )
};
