import React, { useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ViewPager from '@react-native-community/viewpager';
import * as Animatable from 'react-native-animatable';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import {
    CardDataProps,
    SwiperProps
} from '@components/swipe/Swiper/Swiper.props';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';
import { IconEnum } from '@components/icon/Icon.enum';
import { Icon } from '@components/icon/Icon';
import { usePullToRefresh } from '@hooks/usePullToRefresh';

export const Swiper = ({ data }: SwiperProps): JSX.Element => {
    const { name } = data[0];

    const { top } = useSafeAreaInsets();

    const {
        isAnimation,
        onPageScroll,
        onPageScrollStateChanged,
        onPageSelected,
        onCardTouch
    } = usePullToRefresh(name);

    const paddingTop = useMemo(
        (): StyleProp<ViewStyle> => ({ paddingTop: top || 10 }),
        [top]
    );

    return (
        <View style={SwiperStyle.container}>
            {isAnimation && (
                <Animatable.View
                    animation="bounceIn"
                    style={[SwiperStyle.animatableView, paddingTop]}
                >
                    <Icon name={IconEnum.FLASH_FILLED} size={38} />
                </Animatable.View>
            )}
            <ViewPager
                orientation="vertical"
                initialPage={0}
                onPageScroll={onPageScroll}
                onPageScrollStateChanged={onPageScrollStateChanged}
                onPageSelected={onPageSelected}
                style={SwiperStyle.viewPager}
            >
                {data.map((source: CardDataProps) => (
                    <SwiperCard
                        key={source.name}
                        card={source}
                        onCardTouch={onCardTouch}
                    />
                ))}
            </ViewPager>
        </View>
    );
};
