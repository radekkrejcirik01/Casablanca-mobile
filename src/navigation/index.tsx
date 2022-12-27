import React, { useMemo, useState } from 'react';
import {
    createNavigationContainerRef,
    NavigationContainer
} from '@react-navigation/native';
import { DARK_THEME, LIGHT_THEME } from '@navigation/navigation.const';
import { useTheme } from '@hooks/useTheme';
import { useNotifications } from '@hooks/useNotifications';
import { RootStackNavigator } from './RootNavigator/RootStackNavigator';

export const Navigation = (): JSX.Element => {
    const navigationRef = createNavigationContainerRef();
    const [isReady, setIsReady] = useState<boolean>(false);

    useNotifications(navigationRef, isReady);
    const { isDarkMode } = useTheme();

    const onReady = () => setIsReady(true);

    const theme = useMemo(
        () => (isDarkMode ? DARK_THEME : LIGHT_THEME),
        [isDarkMode]
    );

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={onReady}
            theme={theme}
        >
            <RootStackNavigator />
        </NavigationContainer>
    );
};
