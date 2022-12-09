import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import {
    State,
    TapGestureHandler,
    TapGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import ViewPager, {
    ViewPagerOnPageSelectedEvent
} from '@react-native-community/viewpager';
import {
    SwiperCardDefaultProps,
    SwiperCardProps
} from '@components/swipe/SwiperCard/SwiperCard.props';
import { SwiperCardStyle } from '@components/swipe/SwiperCard/SwiperCard.style';
import { DotProgressBar } from '@components/general/DotProgressBar/DotProgressBar';
import { SwiperCardItem } from '@components/swipe/SwiperCardItem/SwiperCardItem';
import { Lottie } from '@components/general/Lottie/Lottie';
import { useLottie } from '@hooks/useLottie';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    ResponseInterface,
    SwipeLikeInterface
} from '@models/Registration/Registration.interface';
import { ReducerProps } from '@store/index.props';
import { SwiperCardEnum } from '@components/swipe/SwiperCard/SwiperCard.enum';

export const SwiperCard = ({
    card,
    cardIndex,
    onCardTouch,
    hasLike,
    style
}: SwiperCardProps): JSX.Element => {
    const { email } = useSelector((state: ReducerProps) => state.user);

    const { lottieRef, lottiePlay, lottieReset, isLottieActive } = useLottie(
        2,
        30
    );

    const [pagePosition, setPagePosition] = useState<number>(0);

    const performLike = useCallback(
        (value: SwiperCardEnum) => {
            postRequest<ResponseInterface, SwipeLikeInterface>(
                'https://cb5fb5ckol.execute-api.eu-central-1.amazonaws.com/swipe/like',
                {
                    email,
                    user: card.email,
                    value
                }
            ).subscribe();
        },
        [card.email, email]
    );

    const onDoubleTap = useCallback(
        (event: TapGestureHandlerGestureEvent) => {
            if (hasLike) {
                if (cardIndex < 2) {
                    onCardTouch(card.email);
                }
                // Trigger like event
                if (event.nativeEvent.state === State.ACTIVE) {
                    lottiePlay();
                    performLike(SwiperCardEnum.LIKE);
                }
            }
        },
        [card?.email, cardIndex, hasLike, lottiePlay, onCardTouch, performLike]
    );

    const onRemoveLike = useCallback(() => {
        lottieReset();
        performLike(SwiperCardEnum.REMOVE_LIKE);
    }, [lottieReset, performLike]);

    const onPageSelected = (event: ViewPagerOnPageSelectedEvent) =>
        setPagePosition(event.nativeEvent.position);

    return (
        <TapGestureHandler onHandlerStateChange={onDoubleTap} numberOfTaps={2}>
            <View style={[SwiperCardStyle.container, style]}>
                <ViewPager
                    style={SwiperCardStyle.viewPager}
                    onPageSelected={onPageSelected}
                >
                    {card?.photos?.map((uri: string, index: number) => (
                        <SwiperCardItem
                            key={uri}
                            index={index}
                            item={card}
                            uri={uri}
                        />
                    ))}
                </ViewPager>
                {hasLike && (
                    <Lottie
                        ref={lottieRef}
                        source={require('../../../assets/animations/like.json')}
                        onRemoveLike={onRemoveLike}
                        style={SwiperCardStyle.lottie}
                        isActive={isLottieActive}
                    />
                )}
                <DotProgressBar
                    pagesNumber={card?.photos?.length}
                    currentPage={pagePosition}
                    style={SwiperCardStyle.dotProgressBar}
                />
            </View>
        </TapGestureHandler>
    );
};

SwiperCard.defaultProps = SwiperCardDefaultProps;
