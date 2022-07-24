import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { LoginHeader } from '@components/general/LoginHeader/LoginHeader';
import { RegistrationStackNavigatorStyle } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.style';

export const LoginScreenOptions: StackNavigationOptions = {
    headerTitle: () => <LoginHeader />,
    headerStyle: {
        ...RegistrationStackNavigatorStyle.header
    }
};
