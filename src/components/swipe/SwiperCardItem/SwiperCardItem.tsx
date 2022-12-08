import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import { PLACE_EMOJIS } from '@components/general/PlaceTag/PlaceTag.const';
import { SwiperCardItemStyle } from '@components/swipe/SwiperCardItem/SwiperCardItem.style';
import { SwiperCardItemProps } from '@components/swipe/SwiperCardItem/SwiperCardItem.props';
import { getAge } from '@functions/getAge';

export const SwiperCardItem = ({
    index,
    item,
    uri
}: SwiperCardItemProps): JSX.Element => {
    const source = useMemo((): Source => ({ uri }), [uri]);

    return (
        <FastImage
            source={source}
            resizeMode="cover"
            style={SwiperCardItemStyle.image}
        >
            {index === 0 && (
                <View style={SwiperCardItemStyle.tagView}>
                    <View style={SwiperCardItemStyle.tagInfoView}>
                        <Text
                            style={[
                                SwiperCardItemStyle.tagText,
                                SwiperCardItemStyle.tagTitle
                            ]}
                        >
                            {item.firstname}, {getAge(item.birthday)}
                        </Text>
                    </View>
                    {item.tags.map((value: string) => (
                        <View
                            key={value}
                            style={SwiperCardItemStyle.tagInfoView}
                        >
                            <Text style={SwiperCardItemStyle.emoji}>
                                {
                                    PLACE_EMOJIS[
                                        value as keyof typeof PLACE_EMOJIS
                                    ]
                                }
                            </Text>
                            <Text style={SwiperCardItemStyle.tagText}>
                                {value}
                            </Text>
                        </View>
                    ))}
                </View>
            )}
        </FastImage>
    );
};
