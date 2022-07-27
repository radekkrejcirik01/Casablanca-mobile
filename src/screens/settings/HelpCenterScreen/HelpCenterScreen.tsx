import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { InfoContent } from '@components/general/InfoContent/InfoContent';
import { HELP_CENTER_CONTENT } from '@screens/settings/HelpCenterScreen/HelpCenterScreen.const';

export const HelpCenterScreen = (): JSX.Element => (
    <SafeAreaProvider>
        <InfoContent content={HELP_CENTER_CONTENT} />
    </SafeAreaProvider>
);
