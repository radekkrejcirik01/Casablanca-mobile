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
        borderTopColor: COLORS.TRANSPARENT,
        paddingHorizontal: 15
    },
    tabBarLabelStyle: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        marginTop: 10
    }
};

export const ProfileTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <Icon
            name={IconEnum.PROFILE_FILLED3}
            size={focused ? 30 : 28}
            style={!focused && BottomTabNavigatorStyle.iconOpacity}
        />
    )
};

export const MatchTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Match',
    tabBarIcon: ({ focused }) => (
        <Icon
            name={IconEnum.FLASH_FILLED}
            size={focused ? 30 : 28}
            style={!focused && BottomTabNavigatorStyle.iconOpacity}
        />
    )
};

export const ChatTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: ({ focused }) => (
        <Icon
            name={IconEnum.CHAT_FILLED}
            size={focused ? 30 : 28}
            style={!focused && BottomTabNavigatorStyle.iconOpacity}
        />
    )
};

export const EventsTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Close friends',
    tabBarIcon: ({ focused }) =>
        focused ? (
            <Icon name={IconEnum.UNLOCK} size={focused ? 30 : 26} />
        ) : (
            <Icon
                name={IconEnum.LOCK}
                size={focused ? 30 : 28}
                style={BottomTabNavigatorStyle.iconOpacity}
            />
        )
};
