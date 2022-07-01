import React from 'react';
import { SafeAreaView, ScrollView, StyleProp } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import * as Animatable from 'react-native-animatable';
import { ImageStyle } from 'react-native-fast-image';
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
    const {
        isAnimation,
        onPageScroll,
        onPageScrollStateChanged,
        onPageSelected
    } = usePullToRefresh();

    return (
        <SafeAreaView style={SwiperStyle.container}>
            {isAnimation && (
                <Animatable.View
                    animation="bounceIn"
                    style={SwiperStyle.animatableView}
                >
                    <Icon name={IconEnum.FLASH_FILLED} size={38} />
                </Animatable.View>
            )}
            <ScrollView
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                style={[SwiperStyle.container, SwiperStyle.borderRadius]}
                contentContainerStyle={SwiperStyle.contentContainer}
            >
                <ViewPager
                    orientation="vertical"
                    initialPage={0}
                    onPageScroll={onPageScroll}
                    onPageScrollStateChanged={onPageScrollStateChanged}
                    onPageSelected={onPageSelected}
                    style={SwiperStyle.viewPager}
                >
                    {data.map((source: CardDataProps) => {
                        const cardStyle: StyleProp<ImageStyle> = [];
                        if (data[0]?.name === source.name) {
                            cardStyle.push(SwiperStyle.borderTopRadius);
                        }
                        if (data[data?.length - 1]?.name === source.name) {
                            cardStyle.push(SwiperStyle.borderBottomRadius);
                        }
                        return (
                            <SwiperCard
                                key={source.name}
                                card={source}
                                cardStyle={cardStyle}
                            />
                        );
                    })}
                </ViewPager>
            </ScrollView>
        </SafeAreaView>
    );
};
