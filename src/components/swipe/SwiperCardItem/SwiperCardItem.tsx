import React, { useMemo, useState } from 'react';
import FastImage, { Source } from 'react-native-fast-image';
import { SwiperCardItemStyle } from '@components/swipe/SwiperCardItem/SwiperCardItem.style';
import { SwiperCardItemProps } from '@components/swipe/SwiperCardItem/SwiperCardItem.props';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { SwiperCardItemContent } from '@components/swipe/SwiperCardItemContent/SwiperCardItemContent';

export const SwiperCardItem = ({
    index,
    item,
    uri
}: SwiperCardItemProps): JSX.Element => {
    const source = useMemo((): Source => ({ uri }), [uri]);

    const [pressedContent, setPressedContent] = useState<boolean>(false);

    const onPressIn = () => setPressedContent(true);

    const onPressOut = () => setPressedContent(false);

    return (
        <TouchableOpacity
            activeOpacity={1}
            delayPressIn={300}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
        >
            <FastImage
                source={source}
                resizeMode="cover"
                style={SwiperCardItemStyle.image}
            >
                <SwiperCardItemContent
                    index={index}
                    item={item}
                    pressedContent={pressedContent}
                />
            </FastImage>
        </TouchableOpacity>
    );
};
