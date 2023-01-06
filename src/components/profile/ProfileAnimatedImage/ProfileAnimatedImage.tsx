import React, { useMemo } from 'react';
import { Animated, StyleProp } from 'react-native';
import FastImage, { ImageStyle, Source } from 'react-native-fast-image';
import { ProfileAnimatedImageStyle } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage.style';
import { ProfileAnimatedImageProps } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage.props';
import AnimatedInterpolation = Animated.AnimatedInterpolation;

export const ProfileAnimatedImage = ({
    source,
    scale
}: ProfileAnimatedImageProps): JSX.Element => {
    const AnimatedImage = Animated.createAnimatedComponent(FastImage);

    const imageSource = useMemo((): Source => ({ uri: source }), [source]);

    const style = useMemo(
        (): (
            | StyleProp<ImageStyle>
            | { transform: { scale: AnimatedInterpolation }[] }
        )[] => [
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

    return <AnimatedImage source={imageSource} style={style} />;
};
