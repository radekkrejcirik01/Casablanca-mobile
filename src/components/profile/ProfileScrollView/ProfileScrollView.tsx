import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import {
    Animated,
    NativeScrollEvent,
    NativeSyntheticEvent
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setBottomBarVisible } from '@store/BottomBarReducer';
import { ProfileScrollViewProps } from '@components/profile/ProfileScrollView/ProfileScrollView.props';
import { ProfileAnimatedImage } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage';
import { animatedEventConfig } from '@components/profile/ProfileScrollView/ProfileScrollView.config';
import { interpolateConfig } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage.config';
import AnimatedInterpolation = Animated.AnimatedInterpolation;

export const ProfileScrollView = ({
    source,
    children
}: ProfileScrollViewProps): JSX.Element => {
    const dispatch = useDispatch();

    const [lastContentOffset, setLastContentOffset] = useState<number>(0);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [isBottomBarVisible, setIsBottomBarVisible] = useState<boolean>(true);
    const [canImageInterpolate, setCanImageInterpolate] =
        useState<boolean>(false);

    const scrollY = useRef(new Animated.Value(0)).current;
    const listRef = useRef(null);

    useEffect(() => {
        dispatch(setBottomBarVisible(isBottomBarVisible));
    }, [dispatch, isBottomBarVisible]);

    const isScrollingDown = useCallback(
        (offset: number, y: number) => offset > y,
        []
    );

    const onScroll = useMemo(
        (): ((event: NativeSyntheticEvent<NativeScrollEvent>) => void) =>
            Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset: { y: scrollY }
                        }
                    }
                ],
                {
                    ...animatedEventConfig,
                    listener: (
                        event: NativeSyntheticEvent<NativeScrollEvent>
                    ) => {
                        const isDown = isScrollingDown(
                            lastContentOffset,
                            event.nativeEvent.contentOffset.y
                        );

                        if (
                            isDown &&
                            event.nativeEvent.contentOffset.y <= 0 &&
                            canImageInterpolate &&
                            !isScrolling
                        ) {
                            listRef.current?.scrollTo({
                                x: 0,
                                y: 0,
                                animated: false
                            });
                            setCanImageInterpolate(false);
                        }

                        if (isDown && event.nativeEvent.contentOffset.y < 150) {
                            setIsBottomBarVisible(true);
                        } else if (
                            !isDown &&
                            event.nativeEvent.contentOffset.y >= 0 &&
                            isScrolling
                        ) {
                            setIsBottomBarVisible(false);
                        }

                        if (
                            !isDown &&
                            event.nativeEvent.contentOffset.y > 100
                        ) {
                            setCanImageInterpolate(true);
                        }

                        setLastContentOffset(event.nativeEvent.contentOffset.y);
                    }
                }
            ),
        [
            canImageInterpolate,
            isScrolling,
            isScrollingDown,
            lastContentOffset,
            scrollY
        ]
    );

    const onScrollBeginDrag = () => setIsScrolling(true);

    const onScrollEndDrag = () => setIsScrolling(false);

    const scale = useMemo(
        (): AnimatedInterpolation => scrollY.interpolate(interpolateConfig),
        [scrollY]
    );

    return (
        <Animated.ScrollView
            ref={listRef}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={onScroll}
            onScrollBeginDrag={onScrollBeginDrag}
            onScrollEndDrag={onScrollEndDrag}
        >
            <ProfileAnimatedImage source={source} scale={scale} />
            {children}
        </Animated.ScrollView>
    );
};
