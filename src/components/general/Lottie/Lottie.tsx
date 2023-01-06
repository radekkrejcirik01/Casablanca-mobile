import { TouchableWithoutFeedback, View } from 'react-native';
import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';
import { LottieStyle } from '@components/general/Lottie/Lottie.style';
import {
    LottieDefaultProps,
    LottieProps
} from '@components/general/Lottie/Lottie.props';

export const Lottie = forwardRef(
    (
        { onRemoveLike, isActive, style, ...props }: LottieProps,
        ref: ForwardedRef<LottieView>
    ): JSX.Element => {
        const [didAnimationFinish, setDidAnimationFinish] =
            useState<boolean>(false);

        const [cancelMode, setCancelMode] = useState<boolean>(false);

        useEffect(() => {
            if (isActive) {
                setDidAnimationFinish(false);
                setCancelMode(false);
            }
        }, [isActive]);

        const onAnimationFinish = () => {
            if (!cancelMode) {
                setDidAnimationFinish(true);
            }
            setCancelMode(false);
        };

        const onPress = () => {
            setCancelMode(true);
            onRemoveLike();
            setDidAnimationFinish(false);
        };

        return (
            <TouchableWithoutFeedback onPress={onPress} disabled={!isActive}>
                <View style={style}>
                    <LottieView
                        ref={ref}
                        autoPlay={false}
                        loop={false}
                        onAnimationFinish={onAnimationFinish}
                        {...props}
                    />
                    {didAnimationFinish && onRemoveLike && (
                        <FastImage
                            source={require('../../../assets/images/like.png')}
                            style={LottieStyle.image}
                        />
                    )}
                </View>
            </TouchableWithoutFeedback>
        );
    }
);

Lottie.defaultProps = LottieDefaultProps;
