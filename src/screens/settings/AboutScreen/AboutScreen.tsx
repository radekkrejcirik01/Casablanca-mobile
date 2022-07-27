import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { InfoText } from '@components/general/InfoText/InfoText';
import { ABOUT_CONTENT } from '@screens/settings/AboutScreen/AboutScreen.const';

export const AboutScreen = (): JSX.Element => (
    <SafeAreaProvider>
        <InfoText content={ABOUT_CONTENT} />
    </SafeAreaProvider>
);
