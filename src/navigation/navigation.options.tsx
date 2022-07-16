import React from 'react';
import COLORS from '@constants/COLORS';
import { LoginHeader } from '@components/general/LoginHeader/LoginHeader';
import {
    HeaderStyleInterpolators,
    StackNavigationOptions
} from '@react-navigation/stack';
import { HeaderLeft } from '@components/registration/HeaderLeft/HeaderLeft';
import { ChatHeader } from '@components/chat/ChatHeader/ChatHeader';
import { transitionConfig } from './navigation.config';
import { NavigationStyle } from './navigation.style';

export const NavigatorScreenOptions: StackNavigationOptions = {
    headerShown: true,
    headerBackTitleVisible: false,
    headerTitleAllowFontScaling: true,
    headerTintColor: COLORS.WHITE,
    headerStyle: {
        ...NavigationStyle.header
    },
    headerTitleStyle: {
        ...NavigationStyle.headerTitle
    },
    headerLeftContainerStyle: {
        ...NavigationStyle.headerLeftContainer
    },
    transitionSpec: {
        open: transitionConfig(800),
        close: transitionConfig(1000)
    }
};

export const LoginScreenOptions: StackNavigationOptions = {
    headerTitle: () => <LoginHeader />,
    headerLeftContainerStyle: {
        ...NavigationStyle.loginScreenHeaderLeft
    }
};

export const RegistrationScreenOptions: StackNavigationOptions = {
    headerTitle: '',
    headerLeft: () => <HeaderLeft />
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
