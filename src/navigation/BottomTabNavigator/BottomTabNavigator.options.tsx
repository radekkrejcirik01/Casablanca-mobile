import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import COLORS from '@constants/COLORS';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { BottomTabNavigatorStyle } from '@navigation/BottomTabNavigator/BottomTabNavigator.style';

export const BottomTabNavigatorOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: {
        backgroundColor: COLORS.MAIN_BLUE,
        borderTopColor: COLORS.TRANSPARENT
    }
};

export const TabOptions: BottomTabNavigationOptions = {
    tabBarLabelStyle: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        marginTop: 10
    }
};

export const ProfileTabOptions: BottomTabNavigationOptions = {
    ...TabOptions,
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <Icon
            name={IconEnum.PROFILE_FILLED3}
            size={focused ? 30 : 26}
            style={!focused && BottomTabNavigatorStyle.iconOpacity}
        />
    )
};

export const MatchTabOptions: BottomTabNavigationOptions = {
    ...TabOptions,
    tabBarLabel: 'Match',
    tabBarIcon: ({ focused }) => (
        <Icon
            name={IconEnum.FLASH_FILLED}
            size={focused ? 30 : 26}
            style={!focused && BottomTabNavigatorStyle.iconOpacity}
        />
    )
};

export const ChatTabOptions: BottomTabNavigationOptions = {
    ...TabOptions,
    tabBarLabel: 'Chat',
    tabBarIcon: ({ focused }) => (
        <Icon
            name={IconEnum.CHAT_FILLED}
            size={focused ? 30 : 26}
            style={!focused && BottomTabNavigatorStyle.iconOpacity}
        />
    )
};

export const EventsTabOptions: BottomTabNavigationOptions = {
    ...TabOptions,
    tabBarLabel: 'Events',
    tabBarIcon: ({ focused }) =>
        focused ? (
            <Icon name={IconEnum.FOOD_FILLED} size={focused ? 30 : 26} />
        ) : (
            <Icon
                name={IconEnum.FOOD_FILLED2}
                size={focused ? 30 : 26}
                style={BottomTabNavigatorStyle.iconOpacity}
            />
        )
};
