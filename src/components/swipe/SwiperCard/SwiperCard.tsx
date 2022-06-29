import React, { useRef } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';
import {
    AnimatedLottieViewInterface,
    SwiperCardProps
} from '@components/swipe/SwiperCard/SwiperCard.props';
import { SwiperCardStyle } from '@components/swipe/SwiperCard/SwiperCard.style';

export const SwiperCard = ({ card }: SwiperCardProps): JSX.Element => {
    const lottieRef = useRef<AnimatedLottieViewInterface>(null);

    const onDoubleTap = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            lottieRef.current.reset(0);
            lottieRef.current.play(2, 75);
        }
    };

    const removeLike = () => {
        lottieRef.current.reset(0);
    };

    return (
        <TapGestureHandler onHandlerStateChange={onDoubleTap} numberOfTaps={2}>
            <View>
                <FastImage
                    source={{ uri: card.image }}
                    style={SwiperCardStyle.image}
                    resizeMode="stretch"
                />
                <TouchableWithoutFeedback onPress={removeLike}>
                    <LottieView
                        ref={lottieRef}
                        source={require('../../../assets/animations/like.json')}
                        autoPlay={false}
                        loop={false}
                    />
                </TouchableWithoutFeedback>
            </View>
        </TapGestureHandler>
    );
};
