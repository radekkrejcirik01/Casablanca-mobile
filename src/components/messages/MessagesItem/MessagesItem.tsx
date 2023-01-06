import React, { useCallback, useMemo } from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { MessagesItemProps } from '@components/messages/MessagesItem/MessagesItem.props';
import { MessagesItemStyle } from '@components/messages/MessagesItem/MessagesItem.style';
import { useTheme } from '@hooks/useTheme';
import COLORS from '@constants/COLORS';

export const MessagesItem = ({
    item,
    onPress
}: MessagesItemProps): JSX.Element => {
    const { isDarkMode } = useTheme();

    const onPressItem = useCallback(() => {
        onPress(item);
    }, [item, onPress]);

    const borderBottomColor = useMemo(
        (): StyleProp<ViewStyle> => ({
            borderBottomColor: isDarkMode
                ? COLORS.BLACK_200
                : COLORS.MAIN_BLUE_100
        }),
        [isDarkMode]
    );

    const opacityStyle = useMemo(
        (): StyleProp<TextStyle> => [{ opacity: item.isRead ? 0.7 : 1 }],
        [item.isRead]
    );

    return (
        <TouchableOpacity
            onPress={onPressItem}
            style={MessagesItemStyle.container}
        >
            <View style={MessagesItemStyle.row}>
                <View>
                    <FastImage
                        source={{ uri: item.profilePicture }}
                        style={MessagesItemStyle.image}
                    />
                </View>
                <View style={[MessagesItemStyle.box, borderBottomColor]}>
                    <View style={MessagesItemStyle.firstRow}>
                        <Text style={MessagesItemStyle.text}>
                            {item.firstname}
                        </Text>
                        <Text style={[MessagesItemStyle.text, opacityStyle]}>
                            {moment(item.time).fromNow()}
                        </Text>
                    </View>
                    <Text style={[MessagesItemStyle.message, opacityStyle]}>
                        {item.message}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
