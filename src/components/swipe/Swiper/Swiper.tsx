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
    SwipeGetInterface,
    SwipeLikeInterface,
    SwipeResponseInterface
} from '@models/Registration/Registration.interface';

export const Swiper = ({ data }: SwiperProps): JSX.Element => {
    const {
        agePreference,
        distancePreference,
        email,
        filterByTags,
        showMe,
        tags
    } = useSelector((state: ReducerProps) => state.user);
    const { likedUsers, swipedUsers } = useSelector(
        (state: ReducerProps) => state.swiper
    );
    const dispatch = useDispatch();

    const [currentUser, setCurrentUser] = useState<string>(null);
    const [swiperCardData, setSwiperCardData] = useState(data);
    const [renderSate, setRenderState] = useState(0);

    const indexEmail = data[0].email;

    const loadMore = useCallback(() => {
        postRequest<SwipeResponseInterface, SwipeGetInterface>(
            'https://cb5fb5ckol.execute-api.eu-central-1.amazonaws.com/swipe/get',
            {
                email,
                distancePreference,
                agePreference,
                showMe,
                filterByTags,
                tags
            }
        ).subscribe((response: SwipeResponseInterface) => {
            if (response?.status) {
                const responseData = response.data;
                responseData.shift();
                data.push(...responseData);
                setSwiperCardData(data);
                setRenderState(renderSate + 1);
            }
        });
    }, [
        agePreference,
        data,
        distancePreference,
        email,
        filterByTags,
        renderSate,
        showMe,
        tags
    ]);

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
            ).subscribe(() => {
                if (
                    currentUser ===
                    swiperCardData[swiperCardData.length - 2].email
                ) {
                    loadMore();
                }
            });
        },
        [currentUser, dispatch, email, likedUsers, loadMore, swiperCardData]
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
        (index: number): StyleProp<ViewStyle> => {
            if (data?.length === 1) {
                return [SwiperStyle.topCard, SwiperStyle.bottomCard];
            }
            if (index === 0) {
                return SwiperStyle.topCard;
            }
            if (index === data?.length - 1) {
                return SwiperStyle.bottomCard;
            }
            return null;
        },
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

    const items = swiperCardData.map((card: CardDataProps, index: number) => {
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
    });

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
                {items}
            </ViewPager>
        </View>
    );
};
