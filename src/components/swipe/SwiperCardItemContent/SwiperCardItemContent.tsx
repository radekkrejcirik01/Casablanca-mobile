import React, { useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { PLACE_EMOJIS } from '@components/general/PlaceTag/PlaceTag.const';
import { SwiperCardItemStyle } from '@components/swipe/SwiperCardItem/SwiperCardItem.style';
import { getAge } from '@functions/getAge';
import moment from 'moment';
import { SwiperCardItemContentProps } from '@components/swipe/SwiperCardItemContent/SwiperCardItemContent.props';

export const SwiperCardItemContent = ({
    index,
    item,
    pressedContent
}: SwiperCardItemContentProps): JSX.Element => {
    const [lastActive, setLastActive] = useState<string>(
        moment(item.lastActive).fromNow()
    );

    useEffect(() => {
        if (index === 0) {
            const interval = setInterval(() => {
                setLastActive(moment(item.lastActive).fromNow());
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
        return () => {};
    }, [index, item.lastActive]);

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

    return (
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
                                {item.firstname},{' '}
                                {getAge(item.birthday).toString()}
                            </Text>
                        </View>
                        <View style={SwiperCardItemStyle.tagInfoView}>
                            <Text style={SwiperCardItemStyle.tagText}>
                                {lastActive}
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
                            {item.about}
                        </Text>
                    </View>
                )}
            </>
        )
    );
};
