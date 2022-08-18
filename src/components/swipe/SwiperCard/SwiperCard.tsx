import React, { useMemo, useState } from 'react';
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
import ViewPager, {
    ViewPagerOnPageSelectedEvent
} from '@react-native-community/viewpager';
import {
    SwiperCardDefaultProps,
    SwiperCardProps
} from '@components/swipe/SwiperCard/SwiperCard.props';
import { SwiperCardStyle } from '@components/swipe/SwiperCard/SwiperCard.style';
import { PLACE_TAGS } from '@components/general/PlaceTags/PlaceTags.const';
import { PLACE_EMOJIS } from '@components/general/PlaceTag/PlaceTag.const';
import { useHaptic } from '@hooks/useHaptic';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';
import { useLottie } from '@hooks/useLottie';
import { DotProgressBar } from '@components/general/DotProgressBar/DotProgressBar';

export const SwiperCard = ({
    card,
    onCardTouch,
    hasLike,
    style
}: SwiperCardProps): JSX.Element => {
    const { top } = useSafeAreaInsets();

    const { lottieRef, lottieReset, lottiePlay } = useLottie();
    const { hapticTouch } = useHaptic();

    const [pagePosition, setPagePosition] = useState<number>(0);

    const onDoubleTap = (event: TapGestureHandlerGestureEvent) => {
        if (hasLike) {
            onCardTouch(card.name);
            // Trigger like event
            if (event.nativeEvent.state === State.ACTIVE) {
                hapticTouch('impactLight');
                lottiePlay();
            }
        }
    };

    const lottieTop = useMemo(
        (): StyleProp<ViewStyle> => ({
            top: top - 10
        }),
        [top]
    );

    const onRemoveLike = () => {
        lottieReset();
    };

    const onPageSelected = (event: ViewPagerOnPageSelectedEvent) => {
        setPagePosition(event.nativeEvent.position);
    };

    return (
        <TapGestureHandler onHandlerStateChange={onDoubleTap} numberOfTaps={2}>
            <View style={[SwiperCardStyle.container, style]}>
                <ViewPager
                    style={SwiperStyle.viewPager}
                    onPageSelected={onPageSelected}
                >
                    {card.images.map((uri: string, index: number) => (
                        <FastImage
                            key={uri + index.toString()} // TODO: Change to uri only
                            source={{ uri }}
                            resizeMode="cover"
                            style={SwiperCardStyle.image}
                        >
                            {index === 0 && (
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
                                    {PLACE_TAGS.slice(0, 4).map(
                                        (value: string) => (
                                            <View
                                                key={value}
                                                style={
                                                    SwiperCardStyle.tagInfoView
                                                }
                                            >
                                                <Text
                                                    style={
                                                        SwiperCardStyle.emoji
                                                    }
                                                >
                                                    {
                                                        PLACE_EMOJIS[
                                                            value as keyof typeof PLACE_EMOJIS
                                                        ]
                                                    }
                                                </Text>
                                                <Text
                                                    style={
                                                        SwiperCardStyle.tagText
                                                    }
                                                >
                                                    {value}
                                                </Text>
                                            </View>
                                        )
                                    )}
                                </View>
                            )}
                        </FastImage>
                    ))}
                </ViewPager>
                {hasLike && (
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
                )}
                <DotProgressBar
                    pagesNumber={card.images?.length}
                    currentPage={pagePosition}
                    style={SwiperCardStyle.dotProgressBar}
                />
            </View>
        </TapGestureHandler>
    );
};

SwiperCard.defaultProps = SwiperCardDefaultProps;
