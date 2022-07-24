import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { ReducerProps } from '@store/index.props';
import { BottomTabNavigator } from '@navigation/BottomTabNavigator/BottomTabNavigator';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { ProfileStackNavigator } from '@navigation/StackNavigators/profile/ProfileStackNavigator';
import { MessagesStackNavigator } from '@navigation/StackNavigators/messages/MessagesStackNavigator';
import { RegistrationStackNavigator } from '@navigation/StackNavigators/registration/RegistrationStackNavigator';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { LoginScreen } from '@screens/login/Login/LoginScreen';
import { LoginScreenOptions } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.options';
import { LoginStackNavigator } from '@navigation/StackNavigators/login/LoginStackNavigator';
import { NavigatorScreenOptions, NoHeader } from './RootStackNavigator.options';

const Root = createStackNavigator<ParamListBase>();

export const RootStackNavigator = (): JSX.Element => {
    const token = useSelector((state: ReducerProps) => state.user.token);

    if (!token) {
        return (
            <Root.Navigator screenOptions={NavigatorScreenOptions}>
                <Root.Group>
                    <Root.Screen
                        name={RootStackNavigatorEnum.BottomTabBar}
                        component={BottomTabNavigator}
                        options={NoHeader}
                    />
                    <Root.Screen
                        name={RootStackNavigatorEnum.ProfileStack}
                        component={ProfileStackNavigator}
                        options={NoHeader}
                    />
                    <Root.Screen
                        name={RootStackNavigatorEnum.MessagesStack}
                        component={MessagesStackNavigator}
                        options={NoHeader}
                    />
                </Root.Group>
            </Root.Navigator>
        );
    }
    return (
        <Root.Navigator screenOptions={NavigatorScreenOptions}>
            <Root.Group>
                <Root.Screen
                    name={RootStackNavigatorEnum.LoginStack}
                    component={LoginStackNavigator}
                    options={NoHeader}
                />
                <Root.Screen
                    name={RootStackNavigatorEnum.RegistrationStack}
                    component={RegistrationStackNavigator}
                    options={NoHeader}
                />
            </Root.Group>
        </Root.Navigator>
    );
};
