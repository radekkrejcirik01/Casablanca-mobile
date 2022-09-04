import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import {
    State,
    TapGestureHandler,
    TapGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import ViewPager, {
    ViewPagerOnPageSelectedEvent
} from '@react-native-community/viewpager';
import {
    SwiperCardDefaultProps,
    SwiperCardProps
} from '@components/swipe/SwiperCard/SwiperCard.props';
import { SwiperCardStyle } from '@components/swipe/SwiperCard/SwiperCard.style';
import { useHaptic } from '@hooks/useHaptic';
import { useLottie } from '@hooks/useLottie';
import { DotProgressBar } from '@components/general/DotProgressBar/DotProgressBar';
import { SwiperCardItem } from '@components/swipe/SwiperCardItem/SwiperCardItem';

export const SwiperCard = ({
    card,
    index,
    onCardTouch,
    hasLike,
    style
}: SwiperCardProps): JSX.Element => {
    const { lottieRef, lottieReset, lottiePlay } = useLottie();
    const { hapticTouch } = useHaptic();

    const [pagePosition, setPagePosition] = useState<number>(0);

    const onDoubleTap = (event: TapGestureHandlerGestureEvent) => {
        if (hasLike) {
            if (index < 2) {
                onCardTouch(card.name);
            }
            // Trigger like event
            if (event.nativeEvent.state === State.ACTIVE) {
                hapticTouch('impactLight');
                lottiePlay();
            }
        }
    };

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
                    style={SwiperCardStyle.viewPager}
                    onPageSelected={onPageSelected}
                >
                    {card?.images?.map((uri: string, index: number) => (
                        <SwiperCardItem
                            key={uri + index.toString()}
                            index={index}
                            item={card}
                            uri={uri}
                        />
                    ))}
                </ViewPager>
                {hasLike && (
                    <TouchableWithoutFeedback onPress={onRemoveLike}>
                        <View style={SwiperCardStyle.lottie}>
                            <LottieView
                                ref={lottieRef}
                                source={require('../../../assets/animations/like.json')}
                                loop={false}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                )}
                <DotProgressBar
                    pagesNumber={card?.images?.length}
                    currentPage={pagePosition}
                    style={SwiperCardStyle.dotProgressBar}
                />
            </View>
        </TapGestureHandler>
    );
};

SwiperCard.defaultProps = SwiperCardDefaultProps;
