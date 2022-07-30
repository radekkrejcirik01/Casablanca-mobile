import React, { useMemo, useRef } from 'react';
import { StyleProp, Text, TouchableWithoutFeedback, View } from 'react-native';
import {
    State,
    TapGestureHandler,
    TapGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import FastImage, { ImageStyle } from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    AnimatedLottieViewInterface,
    SwiperCardProps
} from '@components/swipe/SwiperCard/SwiperCard.props';
import { SwiperCardStyle } from '@components/swipe/SwiperCard/SwiperCard.style';
import { PLACE_TAGS } from '@components/registration/PlaceTags/PlaceTags.const';
import { PLACE_EMOJIS } from '@components/general/PlaceTag/PlaceTag.const';
import { useHaptic } from '@hooks/useHaptic';

export const SwiperCard = ({
    card,
    onCardTouch
}: SwiperCardProps): JSX.Element => {
    const lottieRef = useRef<AnimatedLottieViewInterface>(null);

    const { top } = useSafeAreaInsets();

    const { hapticTouch } = useHaptic();

    const onDoubleTap = (event: TapGestureHandlerGestureEvent) => {
        onCardTouch(card.name);
        // Trigger like event
        if (event.nativeEvent.state === State.ACTIVE) {
            hapticTouch('impactLight');
            lottieRef.current.reset(0);
            lottieRef.current.play(2, 75);
        }
    };

    const paddingTop = useMemo(
        (): StyleProp<ImageStyle> => ({ paddingTop: top ? top - 10 : 10 }),
        [top]
    );

    const onRemoveLike = () => {
        lottieRef.current.reset(0);
    };

    return (
        <TapGestureHandler onHandlerStateChange={onDoubleTap} numberOfTaps={2}>
            <View style={SwiperCardStyle.container}>
                <FastImage
                    source={{ uri: card.image }}
                    style={[SwiperCardStyle.image, paddingTop]}
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
                                    SwiperCardStyle.tagTitle
                                ]}
                            >
                                {card.name}, {card.age}
                            </Text>
                        </View>
                        {PLACE_TAGS.slice(0, 4).map((value) => (
                            <View
                                key={value}
                                style={SwiperCardStyle.tagInfoView}
                            >
                                <Text style={SwiperCardStyle.emoji}>
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
