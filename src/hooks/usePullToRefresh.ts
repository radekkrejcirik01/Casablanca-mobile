import { useEffect, useState } from 'react';
import {
    PageScrollStateChangedNativeEvent,
    ViewPagerOnPageScrollEvent,
    ViewPagerOnPageSelectedEvent
} from '@react-native-community/viewpager';
import { useHaptic } from '@hooks/useHaptic';

export const usePullToRefresh = (
    index: string,
    onRefresh: () => void
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

    const { hapticTouch } = useHaptic();

    useEffect(() => {
        if (
            touchIndex === index &&
            scrollPage === 0 &&
            scrollOffset < 0.92 &&
            scrollOffset > 0.3 &&
            !isScrollDown &&
            !isAnimation
        ) {
            onRefresh();
            hapticTouch('impactMedium');
            setIsAnimation(true);
            setIsScrollDown(false);
        }
    }, [
        hapticTouch,
        isAnimation,
        index,
        isScrollDown,
        onRefresh,
        scrollOffset,
        scrollPage,
        touchIndex
    ]);

    useEffect(() => {
        if (scrollState === 'idle') {
            setIsAnimation(false);
            setIsScrollDown(false);
        }
    }, [scrollState]);

    useEffect(() => {
        if (scrollPage === 0) {
            setIsAnimation(false);
            setIsScrollDown(false);
        }
    }, [scrollPage]);

    const onPageScroll = (event: ViewPagerOnPageScrollEvent) => {
        setScrollOffset(event.nativeEvent.offset);

        if (event.nativeEvent.offset > 0.92) {
            setIsAnimation(false);
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
