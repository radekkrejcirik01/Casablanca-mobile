import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ShowMeSelect } from '@components/registration/ShowMeSelect/ShowMeSelect';

export const ShowMeScreen = (): JSX.Element => (
    <SafeAreaProvider>
        <ShowMeSelect />
    </SafeAreaProvider>
);
