import { useEffect, useMemo, useState } from 'react';
import {
    PageScrollStateChangedNativeEvent,
    ViewPagerOnPageScrollEvent,
    ViewPagerOnPageSelectedEvent
} from '@react-native-community/viewpager';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

export const usePullToRefresh = (): {
    isAnimation: boolean;
    onPageScroll: (event: ViewPagerOnPageScrollEvent) => void;
    onPageScrollStateChanged: (
        event: PageScrollStateChangedNativeEvent
    ) => void;
    onPageSelected: (event: ViewPagerOnPageSelectedEvent) => void;
} => {
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

    return {
        isAnimation,
        onPageScroll,
        onPageScrollStateChanged,
        onPageSelected
    };
};
