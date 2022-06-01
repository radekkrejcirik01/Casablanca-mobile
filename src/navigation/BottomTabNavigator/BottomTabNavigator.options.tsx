import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import COLORS from '@constants/COLORS';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';

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
        fontWeight: 'bold'
    }
};

export const ProfileTabOptions: BottomTabNavigationOptions = {
    ...TabOptions,
    tabBarLabel: 'Profile',
    tabBarIcon: () => <Icon name={IconEnum.PROFILE_FILLED3} />
};

export const MatchTabOptions: BottomTabNavigationOptions = {
    ...TabOptions,
    tabBarLabel: 'Match',
    tabBarIcon: () => <Icon name={IconEnum.FLASH_FILLED} />
};

export const ChatTabOptions: BottomTabNavigationOptions = {
    ...TabOptions,
    tabBarLabel: 'Chat',
    tabBarIcon: () => <Icon name={IconEnum.CHAT_FILLED} />
};

export const EventsTabOptions: BottomTabNavigationOptions = {
    ...TabOptions,
    tabBarLabel: 'Events',
    tabBarIcon: () => <Icon name={IconEnum.FOOD_FILLED} />
};
