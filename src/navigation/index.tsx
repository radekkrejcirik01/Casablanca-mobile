import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CUSTOM_THEME } from '@navigation/navigation.const';
import { RootStackNavigator } from './RootStackNavigator/RootStackNavigator';

export const Navigation = (): JSX.Element => (
    <NavigationContainer theme={CUSTOM_THEME}>
        <RootStackNavigator />
    </NavigationContainer>
);
