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
        borderTopWidth: 0,
        paddingHorizontal: 15,
        marginTop: 5
    },
    tabBarLabelStyle: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 9
    }
};

export const ProfileTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <Icon
            name={IconEnum.PROFILE_FILLED3}
            size={focused ? 28 : 26}
            style={!focused && BottomTabNavigatorStyle.iconOpacity}
        />
    )
};

export const SwipeTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Swipe',
    tabBarIcon: ({ focused }) => (
        <Icon
            name={IconEnum.FLASH_FILLED}
            size={focused ? 28 : 26}
            style={!focused && BottomTabNavigatorStyle.iconOpacity}
        />
    )
};

export const ChatTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: ({ focused }) => (
        <Icon
            name={IconEnum.CHAT_FILLED}
            size={focused ? 27 : 24}
            style={!focused && BottomTabNavigatorStyle.iconOpacity}
        />
    )
};

export const EventsTabOptions: BottomTabNavigationOptions = {
    tabBarLabel: 'Close friends',
    tabBarIcon: ({ focused }) =>
        focused ? (
            <Icon name={IconEnum.UNLOCK} size={focused ? 26 : 24} />
        ) : (
            <Icon
                name={IconEnum.LOCK}
                size={focused ? 26 : 24}
                style={BottomTabNavigatorStyle.iconOpacity}
            />
        )
};
