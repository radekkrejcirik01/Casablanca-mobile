import React from 'react';
import { SafeAreaView } from 'react-native';
import { ChatScreenStyle } from '@screens/general/ChatScreen/ChatScreen.style';

export const ChatScreen = (): JSX.Element => (
    <SafeAreaView style={ChatScreenStyle.container} />
);
