import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    Animated,
    NativeScrollEvent,
    NativeSyntheticEvent
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setBottomBarVisible } from '@store/BottomBarReducer';
import { ProfileScrollViewProps } from '@components/profile/ProfileScrollView/ProfileScrollView.props';
import { ProfileAnimatedImage } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage';
import { animatedEventConfig } from '@components/profile/ProfileScrollView/ProfileScrollView.config';
import { interpolateConfig } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage.config';
import AnimatedInterpolation = Animated.AnimatedInterpolation;

export const ProfileScrollView = ({
    source,
    children
}: ProfileScrollViewProps): JSX.Element => {
    const dispatch = useDispatch();

    const [lastContentOffset, setLastContentOffset] = useState<number>(0);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [isBottomBarVisible, setIsBottomBarVisible] = useState<boolean>(true);

    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        dispatch(setBottomBarVisible(isBottomBarVisible));
    }, [dispatch, isBottomBarVisible]);

    const onScroll = Animated.event(
        [
            {
                nativeEvent: {
                    contentOffset: { y: scrollY }
                }
            }
        ],
        {
            ...animatedEventConfig,
            listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
                if (
                    lastContentOffset > event.nativeEvent.contentOffset.y &&
                    event.nativeEvent.contentOffset.y < 200
                ) {
                    setIsBottomBarVisible(true);
                } else if (
                    lastContentOffset < event.nativeEvent.contentOffset.y &&
                    isScrolling
                ) {
                    setIsBottomBarVisible(false);
                }
                setLastContentOffset(event.nativeEvent.contentOffset.y);
            }
        }
    );

    const onScrollBeginDrag = () => setIsScrolling(true);

    const onScrollEndDrag = () => setIsScrolling(false);

    const scale = useMemo(
        (): AnimatedInterpolation => scrollY.interpolate(interpolateConfig),
        [scrollY]
    );

    return (
        <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={onScroll}
            onScrollBeginDrag={onScrollBeginDrag}
            onScrollEndDrag={onScrollEndDrag}
        >
            <ProfileAnimatedImage source={source} scale={scale} />
            {children}
        </Animated.ScrollView>
    );
};
