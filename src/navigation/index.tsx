import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DARK_THEME, LIGHT_THEME } from '@navigation/navigation.const';
import { useTheme } from '@hooks/useTheme';
import { RootStackNavigator } from './RootNavigator/RootStackNavigator';

export const Navigation = (): JSX.Element => {
    const { isDarkMode } = useTheme();

    const theme = useMemo(
        () => (isDarkMode ? DARK_THEME : LIGHT_THEME),
        [isDarkMode]
    );

    return (
        <NavigationContainer theme={theme}>
            <RootStackNavigator />
        </NavigationContainer>
    );
};
