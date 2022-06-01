import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from './RootStackNavigator/RootStackNavigator';

export const Navigation = (): JSX.Element => (
    <NavigationContainer>
        <RootStackNavigator />
    </NavigationContainer>
);
