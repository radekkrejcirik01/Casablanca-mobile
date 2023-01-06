import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { InfoContent } from '@components/general/InfoContent/InfoContent';
import { COMMUNITY_RULES_CONTENT } from '@screens/profile/settings/CommunityRulesScreen/CommunityRulesScreen.const';

export const CommunityRulesScreen = (): JSX.Element => (
    <SafeAreaProvider>
        <InfoContent content={COMMUNITY_RULES_CONTENT} />
    </SafeAreaProvider>
);
