import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { LoginScreenStyle } from '@screens/login/Login/LoginScreen.style';
import Colors from '@constants/Colors';

export const MatchScreen = (): JSX.Element => (
    <SafeAreaProvider>
        <LinearGradient
            colors={[Colors.MAIN_RED, Colors.MAIN_BLUE]}
            locations={[0.15, 0.9]}
            style={LoginScreenStyle.container}
        >
            <SafeAreaView />
        </LinearGradient>
    </SafeAreaProvider>
);
