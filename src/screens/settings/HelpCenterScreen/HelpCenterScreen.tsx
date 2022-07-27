import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { InfoText } from '@components/general/InfoText/InfoText';
import { HELP_CENTER_CONTENT } from '@screens/settings/HelpCenterScreen/HelpCenterScreen.const';

export const HelpCenterScreen = (): JSX.Element => (
    <SafeAreaProvider>
        <InfoText content={HELP_CENTER_CONTENT} />
    </SafeAreaProvider>
);
