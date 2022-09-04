import React, { useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { ProfileScrollViewProps } from '@components/profile/ProfileScrollView/ProfileScrollView.props';
import { ProfileAnimatedImage } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage';
import { animatedEventConfig } from '@components/profile/ProfileScrollView/ProfileScrollView.config';
import { interpolateConfig } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage.config';
import AnimatedInterpolation = Animated.AnimatedInterpolation;

export const ProfileScrollView = ({
    source,
    children
}: ProfileScrollViewProps): JSX.Element => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const onScroll = Animated.event(
        [
            {
                nativeEvent: {
                    contentOffset: { y: scrollY }
                }
            }
        ],
        animatedEventConfig
    );

    const scale = useMemo(
        (): AnimatedInterpolation => scrollY.interpolate(interpolateConfig),
        [scrollY]
    );

    return (
        <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={onScroll}
        >
            <ProfileAnimatedImage source={source} scale={scale} />
            {children}
        </Animated.ScrollView>
    );
};
