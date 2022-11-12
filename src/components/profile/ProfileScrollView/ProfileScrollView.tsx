import React, { ForwardedRef, forwardRef, useImperativeHandle } from 'react';
import { Animated } from 'react-native';
import {
    ProfileScrollViewForwardedRefProps,
    ProfileScrollViewProps
} from '@components/profile/ProfileScrollView/ProfileScrollView.props';
import { ProfileAnimatedImage } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage';
import { useProfileScrollView } from '@hooks/useProfileScrollView';

export const ProfileScrollView = forwardRef(
    (
        { source, children }: ProfileScrollViewProps,
        reference: ForwardedRef<ProfileScrollViewForwardedRefProps>
    ): JSX.Element => {
        const {
            scale,
            ref,
            onScroll,
            onScrollBeginDrag,
            onScrollEndDrag,
            scrollToInfo
        } = useProfileScrollView();

        useImperativeHandle(reference, () => ({
            scrollToInfo
        }));

        return (
            <Animated.ScrollView
                ref={ref}
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
    }
);
