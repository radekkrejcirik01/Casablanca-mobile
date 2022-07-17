import React from 'react';
import { TextInput, View } from 'react-native';
import { ChatInputStyle } from '@components/chat/ChatInput/ChatInput.style';
import COLORS from '@constants/COLORS';
import {
    ChatInputDefaultProps,
    ChatInputProps
} from '@components/chat/ChatInput/ChatInput.props';

export const ChatInput = ({ style }: ChatInputProps): JSX.Element => (
    <View style={style}>
        <View style={[ChatInputStyle.container]}>
            <TextInput
                style={ChatInputStyle.input}
                placeholder="Message..."
                placeholderTextColor={COLORS.WHITE}
            />
        </View>
    </View>
);

ChatInput.defaultProps = ChatInputDefaultProps;
