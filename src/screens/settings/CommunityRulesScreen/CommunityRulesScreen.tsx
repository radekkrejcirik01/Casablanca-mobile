import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { InfoText } from '@components/general/InfoText/InfoText';
import { COMMUNITY_RULES_CONTENT } from '@screens/settings/CommunityRulesScreen/CommunityRulesScreen.const';

export const CommunityRulesScreen = (): JSX.Element => (
    <SafeAreaProvider>
        <InfoText content={COMMUNITY_RULES_CONTENT} />
    </SafeAreaProvider>
);
