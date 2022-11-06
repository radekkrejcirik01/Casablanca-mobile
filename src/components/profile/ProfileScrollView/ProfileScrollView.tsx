import React from 'react';
import { Animated } from 'react-native';
import { ProfileScrollViewProps } from '@components/profile/ProfileScrollView/ProfileScrollView.props';
import { ProfileAnimatedImage } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage';
import { useProfileScrollView } from '@hooks/useProfileScrollView';

export const ProfileScrollView = ({
    source,
    children
}: ProfileScrollViewProps): JSX.Element => {
    const { scale, ref, onScroll, onScrollBeginDrag, onScrollEndDrag } =
        useProfileScrollView();

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
};
