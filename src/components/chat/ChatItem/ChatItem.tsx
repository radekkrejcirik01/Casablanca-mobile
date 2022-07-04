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
            <View style={ChatItemStyle.view}>
                <FastImage
                    source={{ uri: item.image }}
                    style={ChatItemStyle.image}
                />
                <Text style={ChatItemStyle.text}>
                    {`${item.name}, ${item.age}`}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
