import React, { useCallback, useEffect, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ViewPager, {
    ViewPagerOnPageSelectedEvent
} from '@react-native-community/viewpager';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import {
    CardDataProps,
    SwiperProps
} from '@components/swipe/Swiper/Swiper.props';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';
import { usePullToRefresh } from '@hooks/usePullToRefresh';
import { useLottie } from '@hooks/useLottie';
import { Lottie } from '@components/general/Lottie/Lottie';
import { ReducerProps } from '@store/index.props';
import {
    setLikedUser,
    setRemoveLike,
    setSwipedUser
} from '@store/SwiperReducer';
import { SwiperCardEnum } from '@components/swipe/SwiperCard/SwiperCard.enum';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    ResponseInterface,
    SwipeLikeInterface
} from '@models/Registration/Registration.interface';

export const Swiper = ({ data }: SwiperProps): JSX.Element => {
    const { email } = useSelector((state: ReducerProps) => state.user);
    const { likedUsers, swipedUsers } = useSelector(
        (state: ReducerProps) => state.swiper
    );
    const dispatch = useDispatch();

    const [currentUser, setCurrentUser] = useState<string>(null);

    const indexEmail = data[0].email;

    const performLike = useCallback(
        (user: string, value: SwiperCardEnum) => {
            if (likedUsers.includes(user) && value === SwiperCardEnum.LIKE) {
                return;
            }

            if (value === SwiperCardEnum.LIKE) {
                dispatch(setLikedUser(user));
            } else {
                dispatch(setRemoveLike(user));
                dispatch(setSwipedUser(user));
            }
            postRequest<ResponseInterface, SwipeLikeInterface>(
                'https://cb5fb5ckol.execute-api.eu-central-1.amazonaws.com/swipe/like',
                {
                    email,
                    user,
                    value
                }
            ).subscribe();
        },
        [email, dispatch, likedUsers]
    );

    const swiped = useCallback(() => {
        if (
            currentUser &&
            !swipedUsers.includes(currentUser) &&
            !likedUsers.includes(currentUser)
        ) {
            performLike(currentUser, SwiperCardEnum.REMOVE_LIKE);
            dispatch(setSwipedUser(currentUser));
        }
    }, [currentUser, dispatch, likedUsers, performLike, swipedUsers]);

    const { lottieRef, lottieReset, lottiePlay } = useLottie(2, 50);
    const {
        isAnimation,
        onPageScroll,
        onPageScrollStateChanged,
        onPageSelected,
        onCardTouch
    } = usePullToRefresh(indexEmail, () => swiped());

    useEffect(() => {
        if (isAnimation) {
            lottiePlay();
            return;
        }
        lottieReset();
    }, [isAnimation, lottiePlay, lottieReset]);

    const swiperCardStyle = useCallback(
        (index: number): StyleProp<ViewStyle> =>
            index === 0
                ? SwiperStyle.topCard
                : data?.length - 1 === index && SwiperStyle.bottomCard,
        [data?.length]
    );

    const onSwipe = useCallback(
        (event: ViewPagerOnPageSelectedEvent) => {
            const positionUser = data[event.nativeEvent.position].email;
            if (currentUser !== positionUser) {
                onPageSelected(event);
                setCurrentUser(positionUser);

                swiped();
            }
        },
        [currentUser, data, onPageSelected, swiped]
    );

    return (
        <View style={SwiperStyle.container}>
            <Lottie
                ref={lottieRef}
                source={require('../../../assets/animations/animation.json')}
                style={SwiperStyle.lottie}
            />
            <ViewPager
                orientation="vertical"
                initialPage={0}
                onPageScroll={onPageScroll}
                onPageScrollStateChanged={onPageScrollStateChanged}
                onPageSelected={onSwipe}
                style={SwiperStyle.viewPager}
            >
                {data.map((card: CardDataProps, index: number) => {
                    const style = swiperCardStyle(index);
                    return (
                        <SwiperCard
                            key={card.email}
                            card={card}
                            cardIndex={index}
                            onCardTouch={onCardTouch}
                            performLike={performLike}
                            style={style}
                        />
                    );
                })}
            </ViewPager>
        </View>
    );
};
