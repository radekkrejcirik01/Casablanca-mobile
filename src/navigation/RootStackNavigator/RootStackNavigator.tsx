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
import { NotificationScreen } from '@screens/messages/NotificationScreen/NotificationScreen';
import { ChatScreen } from '@screens/messages/ChatScreen/ChatScreen';
import { SettingsScreen } from '@screens/profile/SettigsScreen/SettingsScreen';
import {
    LoginScreens,
    MessagesScreens,
    ProfileScreens,
    RegistrationScreens,
    RootStackNavigatorEnum
} from '@navigation/RootStackNavigator/RootStackNavigator.enum';
import { DistanceScreen } from '@screens/profile/DistanceScreen/DistanceScreeen';
import {
    ChatScreenHeader,
    DistanceTitle,
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
} from './RootStackNavigator.options';

const Root = createStackNavigator<ParamListBase>();

export const RootStackNavigator = (): JSX.Element => {
    const token = useSelector((state: ReducerProps) => state.user.token);

    if (token) {
        return (
            <Root.Navigator screenOptions={NavigatorScreenOptions}>
                <Root.Group>
                    <Root.Screen
                        name={RootStackNavigatorEnum.BottomTabBar}
                        component={BottomTabNavigator}
                        options={NoHeader}
                    />
                    <Root.Screen
                        name={MessagesScreens.NotificationScreen}
                        component={NotificationScreen}
                        options={{
                            ...NavigationScreenHeader,
                            ...NotificationsTitle
                        }}
                    />
                    <Root.Screen
                        name={MessagesScreens.ChatScreen}
                        component={ChatScreen}
                        options={ChatScreenHeader}
                    />
                    <Root.Screen
                        name={ProfileScreens.SettingsScreen}
                        component={SettingsScreen}
                        options={{
                            ...NavigationScreenHeader,
                            ...SettingsTitle
                        }}
                    />
                    <Root.Screen
                        name={ProfileScreens.DistanceScreen}
                        component={DistanceScreen}
                        options={{
                            ...NavigationScreenHeader,
                            ...DistanceTitle
                        }}
                    />
                </Root.Group>
            </Root.Navigator>
        );
    }
    return (
        <Root.Navigator
            screenOptions={{ ...NavigatorScreenOptions, ...MainRed }}
        >
            <Root.Group>
                <Root.Screen
                    name={LoginScreens.LoginScreen}
                    component={LoginScreen}
                    options={LoginScreenOptions}
                />
                <Root.Screen
                    name={RegistrationScreens.FirstnameScreen}
                    component={FirstnameScreen}
                    options={{ ...RegistrationScreenOptions, ...ForFade }}
                />
                <Root.Screen
                    name={RegistrationScreens.EmailScreen}
                    component={EmailScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegistrationScreens.BirthdayScreen}
                    component={BirthdayScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegistrationScreens.PhotosScreen}
                    component={PhotosScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegistrationScreens.FavePlacesScreen}
                    component={TagsScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegistrationScreens.GenderScreen}
                    component={GenderScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegistrationScreens.WhoShowScreen}
                    component={WhoShowScreen}
                    options={{
                        ...RegistrationScreenOptions,
                        ...ForNoAnimation
                    }}
                />
                <Root.Screen
                    name={RegistrationScreens.PasswordScreen}
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
