import React, { useMemo } from 'react';
import { Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ProfileAnimatedImageStyle } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage.style';
import { ProfileAnimatedImageProps } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage.props';

export const ProfileAnimatedImage = ({
    source,
    scale
}: ProfileAnimatedImageProps): JSX.Element => {
    const AnimatedImage = Animated.createAnimatedComponent(FastImage);

    const style = useMemo(
        () => [
            ProfileAnimatedImageStyle.animatedImage,
            {
                transform: [
                    {
                        scale
                    }
                ]
            }
        ],
        [scale]
    );

    return (
        <AnimatedImage
            source={source || require('@assets/images/profilovka.png')}
            style={style}
        />
    );
};
