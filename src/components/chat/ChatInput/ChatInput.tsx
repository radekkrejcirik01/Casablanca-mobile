import React, { useMemo, useState } from 'react';
import {
    Keyboard,
    StyleProp,
    Text,
    TextInput,
    View,
    ViewStyle
} from 'react-native';
import { ChatInputStyle } from '@components/chat/ChatInput/ChatInput.style';
import COLORS from '@constants/COLORS';
import { ChatInputProps } from '@components/chat/ChatInput/ChatInput.props';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { useTheme } from '@hooks/useTheme';
import { ThemeView } from '@components/general/ThemeView/ThemeView';

export const ChatInput = ({ onSend }: ChatInputProps): JSX.Element => {
    const [value, setValue] = useState<string>();

    const { isDarkMode } = useTheme();

    const onPress = () => {
        Keyboard.dismiss();
        onSend(value);
    };

    const containerBorder = useMemo(
        (): StyleProp<ViewStyle> => ({
            borderColor: isDarkMode ? COLORS.BLACK_200 : COLORS.WHITE
        }),
        [isDarkMode]
    );

    return (
        <ThemeView style={[ChatInputStyle.container, containerBorder]}>
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
        </ThemeView>
    );
};
