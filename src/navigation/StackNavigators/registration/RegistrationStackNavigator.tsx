import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import {
    ForFade,
    ForNoAnimation,
    RegistrationScreenOptions
} from '@navigation/StackNavigators/registration/RegistrationStackNavigator.options';
import { FirstnameScreen } from '@screens/registration/FirstnameScreen/FirstnameScreen';
import { EmailScreen } from '@screens/registration/EmailScreen/EmailScreen';
import { BirthdayScreen } from '@screens/registration/BirthdayScreen/BirthdayScreen';
import { PhotosScreen } from '@screens/registration/PhotosScreen/PhotosScreen';
import { TagsScreen } from '@screens/registration/TagsScreen/TagsScreen';
import { GenderScreen } from '@screens/registration/GenderScreen/GenderScreen';
import { WhoShowScreen } from '@screens/registration/WhoShowScreen/WhoShowScreen';
import { PasswordScreen } from '@screens/registration/PasswordScreen/PasswordScreen';

const Signing = createStackNavigator<ParamListBase>();

export const RegistrationStackNavigator = (): JSX.Element => (
    <Signing.Navigator>
        <Signing.Screen
            name={RegistrationStackNavigatorEnum.FirstnameScreen}
            component={FirstnameScreen}
            options={{ ...RegistrationScreenOptions, ...ForFade }}
        />
        <Signing.Screen
            name={RegistrationStackNavigatorEnum.EmailScreen}
            component={EmailScreen}
            options={{
                ...RegistrationScreenOptions,
                ...ForNoAnimation
            }}
        />
        <Signing.Screen
            name={RegistrationStackNavigatorEnum.BirthdayScreen}
            component={BirthdayScreen}
            options={{
                ...RegistrationScreenOptions,
                ...ForNoAnimation
            }}
        />
        <Signing.Screen
            name={RegistrationStackNavigatorEnum.PhotosScreen}
            component={PhotosScreen}
            options={{
                ...RegistrationScreenOptions,
                ...ForNoAnimation
            }}
        />
        <Signing.Screen
            name={RegistrationStackNavigatorEnum.FavePlacesScreen}
            component={TagsScreen}
            options={{
                ...RegistrationScreenOptions,
                ...ForNoAnimation
            }}
        />
        <Signing.Screen
            name={RegistrationStackNavigatorEnum.GenderScreen}
            component={GenderScreen}
            options={{
                ...RegistrationScreenOptions,
                ...ForNoAnimation
            }}
        />
        <Signing.Screen
            name={RegistrationStackNavigatorEnum.WhoShowScreen}
            component={WhoShowScreen}
            options={{
                ...RegistrationScreenOptions,
                ...ForNoAnimation
            }}
        />
        <Signing.Screen
            name={RegistrationStackNavigatorEnum.PasswordScreen}
            component={PasswordScreen}
            options={{
                ...RegistrationScreenOptions,
                ...ForNoAnimation
            }}
        />
    </Signing.Navigator>
);
