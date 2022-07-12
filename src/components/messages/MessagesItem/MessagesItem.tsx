import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { MessagesItemProps } from '@components/messages/MessagesItem/MessagesItem.props';
import { MessagesItemStyle } from '@components/messages/MessagesItem/MessagesItem.style';

export const MessagesItem = ({ item, onPress }: MessagesItemProps): JSX.Element => {
    const onPressItem = () => {
        onPress(item);
    };
    return (
        <TouchableOpacity onPress={onPressItem} style={MessagesItemStyle.container}>
            <View style={MessagesItemStyle.row}>
                <View>
                    <FastImage
                        source={{ uri: item.image }}
                        style={MessagesItemStyle.image}
                    />
                </View>
                <View style={MessagesItemStyle.box}>
                    <View style={MessagesItemStyle.firstRow}>
                        <Text style={MessagesItemStyle.text}>{item.name}</Text>
                        <Text
                            style={[MessagesItemStyle.text, MessagesItemStyle.opacity]}
                        >
                            Monday
                        </Text>
                    </View>
                    <Text style={MessagesItemStyle.message}>message</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
