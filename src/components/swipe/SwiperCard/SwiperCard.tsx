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

export const SwiperCard = ({
    card,
    cardStyle
}: SwiperCardProps): JSX.Element => {
    const lottieRef = useRef<AnimatedLottieViewInterface>(null);

    const onDoubleTap = (event) => {
        // Trigger like event
        if (event.nativeEvent.state === State.ACTIVE) {
            lottieRef.current.reset(0);
            lottieRef.current.play(2, 75);
        }
    };

    const onRemoveLike = () => {
        lottieRef.current.reset(0);
    };

    return (
        <TapGestureHandler onHandlerStateChange={onDoubleTap} numberOfTaps={2}>
            <View style={[{ backgroundColor: card.color }, cardStyle]}>
                <FastImage
                    source={{ uri: card.image }}
                    style={[SwiperCardStyle.image, cardStyle]}
                    resizeMode="stretch"
                >
                    <TouchableWithoutFeedback onPress={onRemoveLike}>
                        <LottieView
                            ref={lottieRef}
                            source={require('../../../assets/animations/like.json')}
                            autoPlay={false}
                            loop={false}
                            style={SwiperCardStyle.lottieView}
                        />
                    </TouchableWithoutFeedback>
                </FastImage>
            </View>
        </TapGestureHandler>
    );
};
