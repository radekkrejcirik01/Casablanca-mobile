import React from 'react';
import { Text } from 'react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorStyle } from '@navigation/BottomTabNavigator/BottomTabNavigator.style';

export const BottomTabNavigatorOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: BottomTabNavigatorStyle.tabBar,
    tabBarLabelStyle: BottomTabNavigatorStyle.tabBarLabel
};

export const ProfileTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <Text style={{ fontSize: focused ? 26 : 22.5 }}>🙎‍♂️</Text>
    )
};

export const SwipeTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Swipe',
    tabBarIcon: ({ focused }) => (
        <Text style={{ fontSize: focused ? 25 : 20 }}>🔍</Text>
    )
};

export const MessagesTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Messages',
    tabBarIcon: ({ focused }) => (
        <Text style={{ fontSize: focused ? 25 : 20 }}>💬</Text>
    )
};

export const CloseFriendsTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Close friends',
    tabBarIcon: ({ focused }) => (
        <Text style={{ fontSize: focused ? 25 : 20 }}>🎉</Text>
    )
};
