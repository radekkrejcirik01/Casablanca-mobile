import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { LoginScreenStyle } from '@screens/login/Login/LoginScreen.style';
import COLORS from '@constants/COLORS';

export const EventsScreen = (): JSX.Element => (
    <SafeAreaProvider>
        <LinearGradient
            colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
            locations={[0.15, 0.9]}
            style={LoginScreenStyle.container}
        >
            <SafeAreaView />
        </LinearGradient>
    </SafeAreaProvider>
);
