import React, { useEffect } from 'react';
import { View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import LottieView from 'lottie-react-native';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import {
    CardDataProps,
    SwiperProps
} from '@components/swipe/Swiper/Swiper.props';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';
import { usePullToRefresh } from '@hooks/usePullToRefresh';
import { useLottie } from '@hooks/useLottie';

export const Swiper = ({ data }: SwiperProps): JSX.Element => {
    const { name } = data[0];

    const { lottieRef, lottieReset, lottiePlay } = useLottie();

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

    return (
        <View style={SwiperStyle.container}>
            <View style={SwiperStyle.lottieContainer}>
                <LottieView
                    ref={lottieRef}
                    source={require('../../../assets/animations/animation.json')}
                    autoPlay={false}
                    loop={false}
                    style={SwiperStyle.lottie}
                />
            </View>
            <ViewPager
                orientation="vertical"
                initialPage={0}
                onPageScroll={onPageScroll}
                onPageScrollStateChanged={onPageScrollStateChanged}
                onPageSelected={onPageSelected}
                style={SwiperStyle.viewPager}
            >
                {data.map((card: CardDataProps, index: number) => {
                    const style =
                        index === 0
                            ? SwiperStyle.topCard
                            : data?.length - 1 === index &&
                              SwiperStyle.bottomCard;
                    return (
                        <SwiperCard
                            key={card.name}
                            card={card}
                            index={index}
                            onCardTouch={onCardTouch}
                            style={style}
                        />
                    );
                })}
            </ViewPager>
        </View>
    );
};
