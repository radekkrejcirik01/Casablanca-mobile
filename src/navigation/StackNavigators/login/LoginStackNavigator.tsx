import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { LoginScreen } from '@screens/login/Login/LoginScreen';
import { LoginStackNavigatorEnum } from '@navigation/StackNavigators/login/LoginStackNavigator.enum';
import { LoginScreenOptions } from '@navigation/StackNavigators/login/LoginStackNavigator.options';

const Login = createStackNavigator<ParamListBase>();

export const LoginStackNavigator = (): JSX.Element => (
    <Login.Navigator>
        <Login.Screen
            name={LoginStackNavigatorEnum.LoginScreen}
            component={LoginScreen}
            options={LoginScreenOptions}
        />
    </Login.Navigator>
);
