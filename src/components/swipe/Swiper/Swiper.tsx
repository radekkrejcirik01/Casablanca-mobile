import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import {
    CardDataProps,
    SwiperProps
} from '@components/swipe/Swiper/Swiper.props';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';
import { usePullToRefresh } from '@hooks/usePullToRefresh';
import { useLottie } from '@hooks/useLottie';
import { Lottie } from '@components/general/Lottie/Lottie';

export const Swiper = ({ data }: SwiperProps): JSX.Element => {
    const { name } = data[0];

    const { lottieRef, lottieReset, lottiePlay } = useLottie(2, 50);

    const {
        isAnimation,
        onPageScroll,
        onPageScrollStateChanged,
        onPageSelected,
        onCardTouch
    } = usePullToRefresh(name);

    useEffect(() => {
        if (isAnimation) {
            lottiePlay();
            return;
        }
        lottieReset();
    }, [isAnimation, lottiePlay, lottieReset]);

    const swiperCardStyle = useCallback(
        (index: number) =>
            index === 0
                ? SwiperStyle.topCard
                : data?.length - 1 === index && SwiperStyle.bottomCard,
        [data?.length]
    );

    return (
        <View style={SwiperStyle.container}>
            <Lottie
                ref={lottieRef}
                source={require('../../../assets/animations/animation.json')}
                style={SwiperStyle.lottie}
            />
            <ViewPager
                orientation="vertical"
                initialPage={0}
                onPageScroll={onPageScroll}
                onPageScrollStateChanged={onPageScrollStateChanged}
                onPageSelected={onPageSelected}
                style={SwiperStyle.viewPager}
            >
                {data.map((card: CardDataProps, index: number) => {
                    const style = swiperCardStyle(index);
                    return (
                        <SwiperCard
                            key={card.name}
                            card={card}
                            cardIndex={index}
                            onCardTouch={onCardTouch}
                            style={style}
                        />
                    );
                })}
            </ViewPager>
        </View>
    );
};
