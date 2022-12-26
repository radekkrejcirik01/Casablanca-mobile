import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ViewPager, {
    ViewPagerOnPageSelectedEvent
} from '@react-native-community/viewpager';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
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
import { getNonMatchingObjectValues } from '@functions/getNonMatchingObjectValues';

export const Swiper = (): JSX.Element => {
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
    const [positionUser, setPositionUser] = useState<string>(null);
    const [likePerformed, setLikePerformed] = useState<boolean>(false);
    const [swiperCardData, setSwiperCardData] = useState<Array<CardDataProps>>(
        []
    );
    const [performInterval, setPerformInterval] = useState<boolean>(false);

    const interval = useRef(null);

    const data = useRef([]);
    const loadData = useCallback(
        (refresh = false) => {
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
                    const dataArray = refresh ? [] : data?.current;
                    const responseData = getNonMatchingObjectValues(
                        dataArray,
                        response?.data
                    );

                    dataArray.push(...responseData);
                    setSwiperCardData(dataArray);
                    data.current = dataArray;

                    if (responseData?.length) {
                        setPerformInterval(false);
                    }
                } else {
                    setPerformInterval(true);
                }
            });
        },
        [agePreference, distancePreference, email, filterByTags, showMe, tags]
    );

    useEffect(() => {
        if (email) {
            loadData(true);
        }
    }, [email, loadData]);

    useEffect(() => {
        if (performInterval) {
            if (!interval.current) {
                interval.current = setInterval(() => {
                    loadData();
                }, 5000);
            }
        } else if (!performInterval && interval.current) {
            clearInterval(interval.current);
            interval.current = null;
        }
    }, [loadData, performInterval]);

    useEffect(() => {
        if (
            likePerformed &&
            !swipedUsers.includes(positionUser) &&
            swiperCardData?.length &&
            positionUser === swiperCardData[swiperCardData?.length - 3]?.email
        ) {
            loadData();
        }
    }, [likePerformed, loadData, positionUser, swipedUsers, swiperCardData]);

    useEffect(() => {
        if (
            swiperCardData?.length &&
            positionUser === swiperCardData[swiperCardData?.length - 1]?.email
        ) {
            setPerformInterval(true);
        }
    }, [positionUser, swiperCardData]);

    const performLike = useCallback(
        (user: string, value: SwiperCardEnum, refresh = false) => {
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
                if (refresh) {
                    loadData(refresh);
                } else {
                    setLikePerformed(true);
                    setLikePerformed(false);
                }
            });
        },
        [dispatch, email, loadData, likedUsers]
    );

    const swiped = useCallback(
        (refresh = false) => {
            if (
                currentUser &&
                !swipedUsers.includes(currentUser) &&
                !likedUsers.includes(currentUser)
            ) {
                performLike(currentUser, SwiperCardEnum.REMOVE_LIKE, refresh);
                dispatch(setSwipedUser(currentUser));
            }
        },
        [currentUser, dispatch, likedUsers, performLike, swipedUsers]
    );

    const onRefresh = useCallback(() => {
        setTimeout(() => {
            setSwiperCardData([]);
            if (
                likedUsers.includes(swiperCardData[0]?.email) ||
                swipedUsers.includes(swiperCardData[0]?.email)
            ) {
                loadData(true);
            } else {
                swiped(true);
            }
        }, 500);
    }, [likedUsers, loadData, swiped, swipedUsers, swiperCardData]);

    const { lottieRef, lottieReset, lottiePlay } = useLottie(2, 50);
    const {
        isAnimation,
        onPageScroll,
        onPageScrollStateChanged,
        onPageSelected,
        onCardTouch
    } = usePullToRefresh(swiperCardData[0]?.email, onRefresh);

    useEffect(() => {
        if (isAnimation) {
            lottiePlay();
        } else {
            lottieReset();
        }
    }, [isAnimation, lottiePlay, lottieReset]);

    const swiperCardStyle = useCallback(
        (index: number): StyleProp<ViewStyle> => {
            if (swiperCardData?.length === 1) {
                return [SwiperStyle.topCard, SwiperStyle.bottomCard];
            }
            if (index === 0) {
                return SwiperStyle.topCard;
            }
            if (index === swiperCardData?.length - 1) {
                return SwiperStyle.bottomCard;
            }
            return null;
        },
        [swiperCardData?.length]
    );

    const onSwipe = useCallback(
        (event: ViewPagerOnPageSelectedEvent) => {
            const user = swiperCardData[event.nativeEvent.position].email;
            setPositionUser(user);
            if (currentUser !== user) {
                onPageSelected(event);
                setCurrentUser(user);
                swiped();
            }
        },
        [currentUser, onPageSelected, swiped, swiperCardData]
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
            {swiperCardData?.length ? (
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
            ) : null}
        </View>
    );
};
