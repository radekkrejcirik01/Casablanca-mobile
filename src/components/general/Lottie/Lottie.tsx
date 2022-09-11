import { TouchableWithoutFeedback, View } from 'react-native';
import React, { ForwardedRef, forwardRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';
import { LottieStyle } from '@components/general/Lottie/Lottie.style';
import {
    LottieDefaultProps,
    LottieProps
} from '@components/general/Lottie/Lottie.props';

export const Lottie = forwardRef(
    (
        { onRemoveLike, style, ...props }: LottieProps,
        ref: ForwardedRef<LottieView>
    ): JSX.Element => {
        const [didAnimationFinish, setDidAnimationFinish] =
            useState<boolean>(false);

        const onAnimationFinish = () => setDidAnimationFinish(true);

        const onPress = () => {
            setDidAnimationFinish(false);
            onRemoveLike();
        };

        return (
            <View style={style}>
                <LottieView
                    ref={ref}
                    autoPlay={false}
                    loop={false}
                    onAnimationFinish={onAnimationFinish}
                    {...props}
                />
                {didAnimationFinish && onRemoveLike && (
                    <TouchableWithoutFeedback onPress={onPress}>
                        <FastImage
                            source={require('../../../assets/images/like.png')}
                            style={LottieStyle.image}
                        />
                    </TouchableWithoutFeedback>
                )}
            </View>
        );
    }
);

Lottie.defaultProps = LottieDefaultProps;
