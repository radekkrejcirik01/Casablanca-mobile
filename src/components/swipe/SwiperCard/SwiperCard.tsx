import React, { useRef } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import {
    State,
    TapGestureHandler,
    TapGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';
import {
    AnimatedLottieViewInterface,
    SwiperCardProps
} from '@components/swipe/SwiperCard/SwiperCard.props';
import { SwiperCardStyle } from '@components/swipe/SwiperCard/SwiperCard.style';
import { PLACE_TAGS } from '@components/registration/PlaceTags/PlaceTags.const';
import { PLACE_EMOJIS } from '@components/general/PlaceTag/PlaceTag.const';

export const SwiperCard = ({
    card,
    onCardTouch
}: SwiperCardProps): JSX.Element => {
    const lottieRef = useRef<AnimatedLottieViewInterface>(null);

    const onDoubleTap = (event: TapGestureHandlerGestureEvent) => {
        onCardTouch(card.name);
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
            <View style={SwiperCardStyle.container}>
                <FastImage
                    source={{ uri: card.image }}
                    style={SwiperCardStyle.image}
                    resizeMode="cover"
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
                    <View style={SwiperCardStyle.tagView}>
                        <View style={SwiperCardStyle.tagInfoView}>
                            <Text
                                style={[
                                    SwiperCardStyle.tagText,
                                    { fontSize: 14 }
                                ]}
                            >
                                {card.name}, {card.age}
                            </Text>
                        </View>
                        {PLACE_TAGS.map((value) => (
                            <View
                                key={value}
                                style={SwiperCardStyle.tagInfoView}
                            >
                                <Text
                                    style={{
                                        paddingRight: 3,
                                        fontSize: 12
                                    }}
                                >
                                    {
                                        PLACE_EMOJIS[
                                            value as keyof typeof PLACE_EMOJIS
                                        ]
                                    }
                                </Text>
                                <Text style={SwiperCardStyle.tagText}>
                                    {value}
                                </Text>
                            </View>
                        ))}
                    </View>
                </FastImage>
            </View>
        </TapGestureHandler>
    );
};
