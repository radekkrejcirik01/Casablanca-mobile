import React, { useEffect, useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleProp } from 'react-native';
import ViewPager, {
    PageScrollStateChangedNativeEvent,
    ViewPagerOnPageScrollEvent,
    ViewPagerOnPageSelectedEvent
} from '@react-native-community/viewpager';
import * as Animatable from 'react-native-animatable';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { ImageStyle } from 'react-native-fast-image';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import {
    CardDataProps,
    SwiperProps
} from '@components/swipe/Swiper/Swiper.props';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';
import { IconEnum } from '@components/icon/Icon.enum';
import { Icon } from '@components/icon/Icon';

export const Swiper = ({ data }: SwiperProps): JSX.Element => {
    const [scrollOffset, setScrollOffset] = useState<number>(0);
    const [scrollState, setScrollState] = useState<string>(null);
    const [scrollPage, setScrollPage] = useState<number>(0);
    const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
    const [isAnimation, setIsAnimation] = useState<boolean>(false);

    const hapticOptions = useMemo(
        (): ReactNativeHapticFeedback.HapticOptions => ({
            enableVibrateFallback: true,
            ignoreAndroidSystemSettings: false
        }),
        []
    );

    useEffect(() => {
        if (
            scrollOffset < 0.95 &&
            scrollOffset > 0.9 &&
            scrollPage === 0 &&
            !isScrollDown &&
            !isAnimation
        ) {
            ReactNativeHapticFeedback.trigger('impactLight', hapticOptions);
            setIsAnimation(true);
        }
    }, [scrollOffset, scrollPage, isScrollDown, isAnimation, hapticOptions]);

    useEffect(() => {
        if (scrollState === 'idle') {
            setIsAnimation(false);
        }
    }, [scrollState]);

    useEffect(() => {
        if (scrollPage === 0) {
            setIsScrollDown(false);
        }
    }, [scrollPage]);

    const onPageScroll = (event: ViewPagerOnPageScrollEvent) => {
        if (event.nativeEvent.offset < 0.4 && event.nativeEvent.offset > 0.3) {
            setIsScrollDown(true);
        }
        setScrollOffset(event.nativeEvent.offset);
    };

    const onPageScrollStateChanged = (
        event: PageScrollStateChangedNativeEvent
    ) => {
        setScrollState(event.nativeEvent.pageScrollState);
    };

    const onPageSelected = (event: ViewPagerOnPageSelectedEvent) => {
        setScrollPage(event.nativeEvent.position);
    };

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
