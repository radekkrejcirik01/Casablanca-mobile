import React from 'react';
import Colors from '@constants/Colors';
import { Header } from '@components/general/Header/Header';
import {
    HeaderStyleInterpolators,
    StackNavigationOptions
} from '@react-navigation/stack';
import { HeaderLeft } from '@components/registration/HeaderLeft/HeaderLeft';
import { View } from 'react-native';
import { transitionConfig } from './navigation.config';
import { NavigationStyle } from './navigation.style';

export const NavigatorScreenOptions: StackNavigationOptions = {
    headerShown: true,
    headerBackTitleVisible: false,
    headerTitleAllowFontScaling: true,
    headerTintColor: Colors.WHITE,
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
    headerTitle: () => <Header />,
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
