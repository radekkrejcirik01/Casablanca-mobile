import React from 'react';
import { TextInput, View } from 'react-native';
import { ChatInputStyle } from '@components/chat/ChatInput/ChatInput.style';
import COLORS from '@constants/COLORS';

export const ChatInput = (): JSX.Element => (
    <View style={ChatInputStyle.container}>
        <TextInput
            style={ChatInputStyle.input}
            placeholder="Message..."
            placeholderTextColor={COLORS.WHITE}
        />
    </View>
);
