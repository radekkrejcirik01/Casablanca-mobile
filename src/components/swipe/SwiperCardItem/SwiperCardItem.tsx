import React, { useCallback, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import { PLACE_EMOJIS } from '@components/general/PlaceTag/PlaceTag.const';
import { SwiperCardItemStyle } from '@components/swipe/SwiperCardItem/SwiperCardItem.style';
import { SwiperCardItemProps } from '@components/swipe/SwiperCardItem/SwiperCardItem.props';
import { getAge } from '@functions/getAge';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';

export const SwiperCardItem = ({
    index,
    item,
    uri
}: SwiperCardItemProps): JSX.Element => {
    const source = useMemo((): Source => ({ uri }), [uri]);

    const [pressedContent, setPressedContent] = useState<boolean>(false);

    const onPressIn = () => setPressedContent(true);

    const onPressOut = () => setPressedContent(false);

    const firstname = useMemo((): string => item.firstname, [item.firstname]);

    const age = useMemo(
        (): string => getAge(item.birthday).toString(),
        [item.birthday]
    );

    const tags = useMemo(
        (): Array<JSX.Element> =>
            item.tags.map((value: string) => (
                <View key={value} style={SwiperCardItemStyle.tagInfoView}>
                    <Text style={SwiperCardItemStyle.emoji}>
                        {PLACE_EMOJIS[value as keyof typeof PLACE_EMOJIS]}
                    </Text>
                    <Text style={SwiperCardItemStyle.tagText}>{value}</Text>
                </View>
            )),
        [item.tags]
    );

    const about = useMemo((): string => item.about, [item.about]);

    const Content = useCallback(
        (): JSX.Element =>
            !pressedContent && (
                <>
                    {index === 0 && (
                        <>
                            <View style={SwiperCardItemStyle.tagInfoView}>
                                <Text
                                    style={[
                                        SwiperCardItemStyle.tagText,
                                        SwiperCardItemStyle.tagTitle
                                    ]}
                                >
                                    {firstname}, {age}
                                </Text>
                            </View>
                            {tags}
                        </>
                    )}
                    {index === 1 && (
                        <View style={SwiperCardItemStyle.tagInfoView}>
                            <Text
                                style={[
                                    SwiperCardItemStyle.tagText,
                                    SwiperCardItemStyle.tagTitle
                                ]}
                            >
                                {about}
                            </Text>
                        </View>
                    )}
                </>
            ),
        [about, age, firstname, index, pressedContent, tags]
    );

    return (
        <TouchableOpacity
            activeOpacity={1}
            delayPressIn={100}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
        >
            <FastImage
                source={source}
                resizeMode="cover"
                style={SwiperCardItemStyle.image}
            >
                <Content />
            </FastImage>
        </TouchableOpacity>
    );
};
