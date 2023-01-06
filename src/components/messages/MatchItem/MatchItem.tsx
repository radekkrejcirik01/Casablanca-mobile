import React, { useMemo } from 'react';
import { StyleProp, Text } from 'react-native';
import FastImage, { ImageStyle } from 'react-native-fast-image';
import { MatchItemStyle } from '@components/messages/MatchItem/MatchItem.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { MatchItemProps } from '@components/messages/MatchItem/MatchItem.props';
import { getAge } from '@functions/getAge';

export const MatchItem = ({ item, onPress }: MatchItemProps): JSX.Element => {
    const onPressItem = () => {
        onPress(item);
    };

    const imageStyle = useMemo(
        (): StyleProp<ImageStyle> => [
            MatchItemStyle.image,
            !item.isSeen && MatchItemStyle.imageBorder
        ],
        [item.isSeen]
    );

    return (
        <TouchableOpacity
            onPress={onPressItem}
            style={MatchItemStyle.container}
        >
            <FastImage
                source={{ uri: item.user.profilePicture }}
                style={imageStyle}
            />
            <Text style={MatchItemStyle.text}>
                {item.user.firstname}, {getAge(item.user.birthday)}
            </Text>
        </TouchableOpacity>
    );
};
