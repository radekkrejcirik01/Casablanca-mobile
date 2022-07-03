import { useCallback, useEffect, useMemo, useState } from 'react';
import {
    PageScrollStateChangedNativeEvent,
    ViewPagerOnPageScrollEvent,
    ViewPagerOnPageSelectedEvent
} from '@react-native-community/viewpager';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

export const usePullToRefresh = (
    index: string
): {
    isAnimation: boolean;
    onPageScroll: (event: ViewPagerOnPageScrollEvent) => void;
    onPageScrollStateChanged: (
        event: PageScrollStateChangedNativeEvent
    ) => void;
    onPageSelected: (event: ViewPagerOnPageSelectedEvent) => void;
    onCardTouch: (name: string) => void;
} => {
    const [scrollOffset, setScrollOffset] = useState<number>(0);
    const [scrollState, setScrollState] = useState<string>();
    const [scrollPage, setScrollPage] = useState<number>(0);
    const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
    const [isAnimation, setIsAnimation] = useState<boolean>(false);

    const [touchIndex, setTouchIndex] = useState<string>();

    const hapticOptions = useMemo(
        (): ReactNativeHapticFeedback.HapticOptions => ({
            enableVibrateFallback: true,
            ignoreAndroidSystemSettings: false
        }),
        []
    );

    const onRefresh = useCallback(() => {
        ReactNativeHapticFeedback.trigger('impactHeavy', hapticOptions);
    }, [hapticOptions]);

    useEffect(() => {
        if (
            touchIndex === index &&
            scrollPage === 0 &&
            scrollOffset < 0.9 &&
            scrollOffset > 0.85 &&
            !isScrollDown &&
            !isAnimation
        ) {
            onRefresh();
            setIsAnimation(true);
            setIsScrollDown(false);
        }
    }, [
        index,
        touchIndex,
        scrollOffset,
        scrollPage,
        isScrollDown,
        isAnimation,
        onRefresh
    ]);

    useEffect(() => {
        if (scrollState === 'idle') {
            setIsAnimation(false);
            setIsScrollDown(false);
        }
    }, [scrollState]);

    useEffect(() => {
        if (scrollPage === 0) {
            setIsScrollDown(false);
        }
    }, [scrollPage]);

    const onPageScroll = (event: ViewPagerOnPageScrollEvent) => {
        setScrollOffset(event.nativeEvent.offset);

        if (event.nativeEvent.offset > 0.9) {
            setIsScrollDown(false);
        }
        if (event.nativeEvent.offset < 0.4 && event.nativeEvent.offset > 0) {
            setIsScrollDown(true);
        }
    };

    const onPageScrollStateChanged = (
        event: PageScrollStateChangedNativeEvent
    ) => {
        setScrollState(event.nativeEvent.pageScrollState);
    };

    const onPageSelected = (event: ViewPagerOnPageSelectedEvent) => {
        setScrollPage(event.nativeEvent.position);
    };

    const onCardTouch = (name: string) => {
        setTouchIndex(name);
    };

    return {
        isAnimation,
        onPageScroll,
        onPageScrollStateChanged,
        onPageSelected,
        onCardTouch
    };
};
