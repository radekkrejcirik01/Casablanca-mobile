import React from 'react';
import { SafeAreaView } from 'react-native';
import { ConversationScreenStyle } from '@screens/general/ConversationScreen/ConversationScreen.style';

export const ConversationScreen = (): JSX.Element => (
    <SafeAreaView style={ConversationScreenStyle.container} />
);
