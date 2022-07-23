import React from 'react';
import COLORS from '@constants/COLORS';
import { LoginHeader } from '@components/general/LoginHeader/LoginHeader';
import {
    HeaderStyleInterpolators,
    StackNavigationOptions
} from '@react-navigation/stack';
import { HeaderLeft } from '@components/registration/HeaderLeft/HeaderLeft';
import { ChatHeader } from '@components/chat/ChatHeader/ChatHeader';
import { transitionConfig } from './RootStackNavigator.config';
import { RootStackNavigatorStyle } from './RootStackNavigator.style';

export const NavigatorScreenOptions: StackNavigationOptions = {
    transitionSpec: {
        open: transitionConfig(800),
        close: transitionConfig(1000)
    }
};

export const LoginScreenOptions: StackNavigationOptions = {
    headerTitle: () => <LoginHeader />,
    headerLeftContainerStyle: {
        ...RootStackNavigatorStyle.loginScreenHeaderLeft
    }
};

export const RegistrationScreenOptions: StackNavigationOptions = {
    headerTitle: '',
    headerLeft: () => <HeaderLeft />,
    headerLeftContainerStyle: {
        ...RootStackNavigatorStyle.registrationLeftContainer
    }
};

export const MainRed: StackNavigationOptions = {
    headerStyle: {
        ...RootStackNavigatorStyle.mainRed
    }
};

export const ForNoAnimation: StackNavigationOptions = {
    headerStyleInterpolator: HeaderStyleInterpolators.forNoAnimation
};

export const ForFade: StackNavigationOptions = {
    headerStyleInterpolator: HeaderStyleInterpolators.forFade
};

export const NoHeader: StackNavigationOptions = {
    headerShown: false
};

export const ChatScreenHeader: StackNavigationOptions = {
    header: () => <ChatHeader />
};

export const NavigationScreenHeader: StackNavigationOptions = {
    headerTintColor: COLORS.WHITE,
    headerStyle: {
        ...RootStackNavigatorStyle.navigationScreen
    },
    headerBackTitle: 'Back'
};

export const NotificationsTitle: StackNavigationOptions = {
    headerTitle: 'Notifications'
};

export const SettingsTitle: StackNavigationOptions = {
    headerTitle: 'Settings'
};

export const DistanceTitle: StackNavigationOptions = {
    headerTitle: 'Distance'
};
