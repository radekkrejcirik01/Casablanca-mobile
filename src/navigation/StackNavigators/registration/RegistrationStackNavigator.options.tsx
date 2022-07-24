import React from 'react';
import {
    HeaderStyleInterpolators,
    StackNavigationOptions
} from '@react-navigation/stack';
import { HeaderLeft } from '@components/registration/HeaderLeft/HeaderLeft';
import { RegistrationStackNavigatorStyle } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.style';

export const RegistrationScreenOptions: StackNavigationOptions = {
    headerTitle: '',
    headerLeft: () => <HeaderLeft />,
    headerStyle: {
        ...RegistrationStackNavigatorStyle.header
    },
    headerLeftContainerStyle: {
        ...RegistrationStackNavigatorStyle.headerLeft
    }
};

export const ForFade: StackNavigationOptions = {
    headerStyleInterpolator: HeaderStyleInterpolators.forFade
};

export const ForNoAnimation: StackNavigationOptions = {
    headerStyleInterpolator: HeaderStyleInterpolators.forNoAnimation
};
