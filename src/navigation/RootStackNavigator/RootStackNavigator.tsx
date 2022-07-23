import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { FirstnameScreen } from '@screens/registration/FirstnameScreen/FirstnameScreen';
import { EmailScreen } from '@screens/registration/EmailScreen/EmailScreen';
import { LoginScreen } from '@screens/login/Login/LoginScreen';
import { BirthdayScreen } from '@screens/registration/BirthdayScreen/BirthdayScreen';
import { PhotosScreen } from '@screens/registration/PhotosScreen/PhotosScreen';
import { TagsScreen } from '@screens/registration/TagsScreen/TagsScreen';
import { GenderScreen } from '@screens/registration/GenderScreen/GenderScreen';
import { WhoShowScreen } from '@screens/registration/WhoShowScreen/WhoShowScreen';
import { ReducerProps } from '@store/index.props';
import { PasswordScreen } from '@screens/registration/PasswordScreen/PasswordScreen';
import { BottomTabNavigator } from '@navigation/BottomTabNavigator/BottomTabNavigator';
import { NotificationScreen } from '@screens/general/NotificationScreen/NotificationScreen';
import { ChatScreen } from '@screens/general/ChatScreen/ChatScreen';
import { SettingsScreen } from '@screens/general/SettigsScreen/SettingsScreen';
import {
    LoginNavigatorScreens,
    RegisterNavigatorScreens,
    TabBarScreens
} from '../navigation.enum';
import {
    ChatScreenHeader,
    ForFade,
    ForNoAnimation,
    LoginScreenOptions,
    MainRed,
    NavigationScreenHeader,
    NavigatorScreenOptions,
    NoHeader,
    NotificationsTitle,
    RegistrationScreenOptions,
    SettingsTitle
} from '../navigation.options';

const Root = createStackNavigator<ParamListBase>();

export const RootStackNavigator = (): JSX.Element => {
    const token = useSelector((state: ReducerProps) => state.user.token);

    if (token) {
        return (
            <Root.Navigator
                initialRouteName={TabBarScreens.BottomTabBar}
                screenOptions={NavigatorScreenOptions}
            >
                <Root.Group>
                    <Root.Screen
                        name={TabBarScreens.BottomTabBar}
                        component={BottomTabNavigator}
                        options={NoHeader}
                    />
                    <Root.Screen
                        name={TabBarScreens.NotificationScreen}
                        component={NotificationScreen}
                        options={{
                            ...NavigationScreenHeader,
                            ...NotificationsTitle
                        }}
                    />
                    <Root.Screen
                        name={TabBarScreens.ChatScreen}
                        component={ChatScreen}
                        options={ChatScreenHeader}
                    />
                    <Root.Screen
                        name={TabBarScreens.SettingsScreen}
                        component={SettingsScreen}
                        options={{
                            ...NavigationScreenHeader,
                            ...SettingsTitle
                        }}
                    />
                </Root.Group>
            </Root.Navigator>
        );
    }
    return (
        <Root.Navigator
            initialRouteName={LoginNavigatorScreens.LoginScreen}
            screenOptions={{ ...NavigatorScreenOptions, ...MainRed }}
        >
            <Root.Group>
                <Root.Screen
                    name={LoginNavigatorScreens.LoginScreen}
                    component={LoginScreen}
                    options={LoginScreenOptions}
                />
                <Root.Screen
                    name={RegisterNavigatorScreens.FirstnameScreen}
                    component={FirstnameScreen}
                    options={{ ...RegistrationScreenOptions, ...ForFade }}
                />
                <Root.Screen
                    name={RegisterNavigatorScreens.EmailScreen}
                    component={EmailScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegisterNavigatorScreens.BirthdayScreen}
                    component={BirthdayScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegisterNavigatorScreens.PhotosScreen}
                    component={PhotosScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegisterNavigatorScreens.FavePlacesScreen}
                    component={TagsScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegisterNavigatorScreens.GenderScreen}
                    component={GenderScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegisterNavigatorScreens.WhoShowScreen}
                    component={WhoShowScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegisterNavigatorScreens.PasswordScreen}
                    component={PasswordScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
            </Root.Group>
        </Root.Navigator>
    );
};
