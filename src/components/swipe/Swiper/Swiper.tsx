import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ViewPager, {
    PageScrollStateChangedNativeEvent,
    ViewPagerOnPageScrollEvent,
    ViewPagerOnPageSelectedEvent
} from '@react-native-community/viewpager';
import * as Animatable from 'react-native-animatable';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import {
    CardDataProps,
    SwiperProps
} from '@components/swipe/Swiper/Swiper.props';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';
import { IconEnum } from '@components/icon/Icon.enum';
import { Icon } from '@components/icon/Icon';

export const Swiper = ({ data }: SwiperProps): JSX.Element => {
    const [scrollOffset, setScrollOffset] = useState<number>();
    const [scrollState, setScrollState] = useState<string>(null);
    const [scrollPage, setScrollPage] = useState<number>(0);
    const [isAnimation, setIsAnimation] = useState<boolean>(false);

    useEffect(() => {
        if (
            scrollOffset < 0.95 &&
            scrollOffset > 0.9 &&
            scrollPage === 0 &&
            !isAnimation
        ) {
            setIsAnimation(true);
        }
    }, [scrollOffset, scrollPage, isAnimation]);

    useEffect(() => {
        if (scrollState === 'idle') {
            setIsAnimation(false);
        }
    }, [scrollState]);

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
                style={[SwiperStyle.container, SwiperStyle.borderTopRadius]}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={SwiperStyle.contentContainer}
            >
                <ViewPager
                    orientation="vertical"
                    initialPage={0}
                    style={SwiperStyle.viewPager}
                    onPageScroll={(event: ViewPagerOnPageScrollEvent) => {
                        setScrollOffset(event.nativeEvent.offset);
                    }}
                    onPageScrollStateChanged={(
                        event: PageScrollStateChangedNativeEvent
                    ) => {
                        setScrollState(event.nativeEvent.pageScrollState);
                    }}
                    onPageSelected={(event: ViewPagerOnPageSelectedEvent) => {
                        setScrollPage(event.nativeEvent.position);
                    }}
                >
                    {data.map((source: CardDataProps) => (
                        <SwiperCard
                            key={source.name}
                            card={source}
                            cardStyle={
                                data[0]?.name === source.name &&
                                SwiperStyle.borderTopRadius
                            }
                        />
                    ))}
                </ViewPager>
            </ScrollView>
        </SafeAreaView>
    );
};
