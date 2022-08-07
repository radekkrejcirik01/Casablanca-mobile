import React from 'react';
import { Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { MatchItemStyle } from '@components/messages/MatchItem/MatchItem.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { MatchItemProps } from '@components/messages/MatchItem/MatchItem.props';

export const MatchItem = ({ item, onPress }: MatchItemProps): JSX.Element => {
    const onPressItem = () => {
        onPress(item);
    };
    return (
        <TouchableOpacity
            onPress={onPressItem}
            style={MatchItemStyle.container}
        >
            <FastImage
                source={{ uri: item.images[0] }}
                style={MatchItemStyle.image}
            />
            <Text style={MatchItemStyle.text}>
                {`${item.name}, ${item.age}`}
            </Text>
        </TouchableOpacity>
    );
};
