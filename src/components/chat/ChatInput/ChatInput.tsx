import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { ChatInputStyle } from '@components/chat/ChatInput/ChatInput.style';
import COLORS from '@constants/COLORS';
import {
    ChatInputDefaultProps,
    ChatInputProps
} from '@components/chat/ChatInput/ChatInput.props';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';

export const ChatInput = ({ onSend, style }: ChatInputProps): JSX.Element => {
    const [value, setValue] = useState<string>();

    const onPress = () => {
        onSend(value);
    };

    return (
        <View style={style}>
            <View style={ChatInputStyle.container}>
                <TextInput
                    placeholder="Message..."
                    placeholderTextColor={COLORS.WHITE}
                    onChangeText={setValue}
                    multiline
                    selectionColor={COLORS.WHITE}
                    style={ChatInputStyle.input}
                />
                <View style={ChatInputStyle.sendView}>
                    <TouchableOpacity disabled={!value} onPress={onPress}>
                        <Text style={ChatInputStyle.send}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

ChatInput.defaultProps = ChatInputDefaultProps;
