import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { InfoContent } from '@components/general/InfoContent/InfoContent';
import { ABOUT_CONTENT } from '@screens/settings/AboutScreen/AboutScreen.const';

export const AboutScreen = (): JSX.Element => (
    <SafeAreaProvider>
        <InfoContent content={ABOUT_CONTENT} />
    </SafeAreaProvider>
);
