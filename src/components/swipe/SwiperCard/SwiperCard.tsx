import React, { useMemo } from 'react';
import {
    StyleProp,
    Text,
    TouchableWithoutFeedback,
    View,
    ViewStyle
} from 'react-native';
import {
    State,
    TapGestureHandler,
    TapGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ViewPager from '@react-native-community/viewpager';
import { SwiperCardProps } from '@components/swipe/SwiperCard/SwiperCard.props';
import { SwiperCardStyle } from '@components/swipe/SwiperCard/SwiperCard.style';
import { PLACE_TAGS } from '@components/registration/PlaceTags/PlaceTags.const';
import { PLACE_EMOJIS } from '@components/general/PlaceTag/PlaceTag.const';
import { useHaptic } from '@hooks/useHaptic';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';
import { useLottie } from '@hooks/useLottie';

export const SwiperCard = ({
    card,
    onCardTouch,
    onInfoTouch
}: SwiperCardProps): JSX.Element => {
    const { top } = useSafeAreaInsets();

    const { lottieRef, lottieReset, lottiePlay } = useLottie();
    const { hapticTouch } = useHaptic();

    const onDoubleTap = (event: TapGestureHandlerGestureEvent) => {
        onCardTouch(card.name);
        // Trigger like event
        if (event.nativeEvent.state === State.ACTIVE) {
            hapticTouch('impactLight');
            lottiePlay();
        }
    };

    const infoTouch = () => {
        onInfoTouch(card.images, card.name, card.age);
    };

    const lottieTop = useMemo(
        (): StyleProp<ViewStyle> => ({
            top: top ? top - 10 : 10
        }),
        [top]
    );

    const onRemoveLike = () => {
        lottieReset();
    };

    return (
        <TapGestureHandler onHandlerStateChange={onDoubleTap} numberOfTaps={2}>
            <View style={SwiperCardStyle.container}>
                <ViewPager style={SwiperStyle.viewPager}>
                    {card.images.map((uri: string, index: number) => (
                        <FastImage
                            key={uri + index.toString()} // TODO: Change to uri only
                            source={{ uri }}
                            resizeMode="cover"
                            style={SwiperCardStyle.image}
                        />
                    ))}
                </ViewPager>
                <TouchableWithoutFeedback onPress={onRemoveLike}>
                    <View style={[SwiperCardStyle.lottie, lottieTop]}>
                        <LottieView
                            ref={lottieRef}
                            source={require('../../../assets/animations/like.json')}
                            autoPlay={false}
                            loop={false}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <View style={SwiperCardStyle.tagView}>
                    <TouchableOpacity onPress={infoTouch}>
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
                    </TouchableOpacity>
                    {PLACE_TAGS.slice(0, 4).map((value) => (
                        <View key={value} style={SwiperCardStyle.tagInfoView}>
                            <Text style={SwiperCardStyle.emoji}>
                                {
                                    PLACE_EMOJIS[
                                        value as keyof typeof PLACE_EMOJIS
                                    ]
                                }
                            </Text>
                            <Text style={SwiperCardStyle.tagText}>{value}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </TapGestureHandler>
    );
};
