import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { ChatItemProps } from '@components/chat/ChatItem/ChatItem.props';
import { ChatItemStyle } from '@components/chat/ChatItem/ChatItem.style';

export const ChatItem = ({ item, onPress }: ChatItemProps): JSX.Element => {
    const onPressItem = () => {
        onPress(item);
    };
    return (
        <TouchableOpacity onPress={onPressItem} style={ChatItemStyle.container}>
            <View style={ChatItemStyle.row}>
                <View>
                    <FastImage
                        source={{ uri: item.image }}
                        style={ChatItemStyle.image}
                    />
                </View>
                <View style={ChatItemStyle.box}>
                    <View style={ChatItemStyle.firstRow}>
                        <Text style={ChatItemStyle.name}>{item.name}</Text>
                        <Text style={ChatItemStyle.name}>Monday</Text>
                    </View>
                    <Text style={ChatItemStyle.message}>message</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
