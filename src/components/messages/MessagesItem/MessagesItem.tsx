import React, { useMemo } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
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

    const onPressItem = () => {
        onPress(item);
    };

    const borderBottomColor = useMemo(
        (): StyleProp<ViewStyle> => ({
            borderBottomColor: isDarkMode
                ? COLORS.BLACK_200
                : COLORS.MAIN_BLUE_100
        }),
        [isDarkMode]
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
                        <Text
                            style={[
                                MessagesItemStyle.text,
                                MessagesItemStyle.opacity
                            ]}
                        >
                            {item.time}
                        </Text>
                    </View>
                    <Text style={MessagesItemStyle.message}>
                        {item.message}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
