import {
    RefObject,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import {
    Animated,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView
} from 'react-native';
import { useDispatch } from 'react-redux';
import { animatedEventConfig } from '@components/profile/ProfileScrollView/ProfileScrollView.config';
import { setBottomBarVisible } from '@store/BottomBarReducer';
import { interpolateConfig } from '@components/profile/ProfileAnimatedImage/ProfileAnimatedImage.config';
import AnimatedInterpolation = Animated.AnimatedInterpolation;

export const useProfileScrollView = (): {
    scale: AnimatedInterpolation;
    ref: RefObject<ScrollView>;
    onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    onScrollBeginDrag: () => void;
    onScrollEndDrag: () => void;
    scrollToInfo: () => void;
} => {
    const dispatch = useDispatch();

    const [lastContentOffset, setLastContentOffset] = useState<number>(0);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [isBottomBarVisible, setIsBottomBarVisible] = useState<boolean>(true);
    const [stopWhenUp, setStopWhenUp] = useState<boolean>(false);

    const scrollY = useRef(new Animated.Value(0)).current;
    const ref = useRef(null);

    useEffect(() => {
        dispatch(setBottomBarVisible(isBottomBarVisible));
    }, [dispatch, isBottomBarVisible]);

    const scale = useMemo(
        (): AnimatedInterpolation => scrollY.interpolate(interpolateConfig),
        [scrollY]
    );

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
                            stopWhenUp &&
                            event.nativeEvent.contentOffset.y <= 2
                        ) {
                            ref.current?.scrollTo({
                                x: 0,
                                y: lastContentOffset,
                                animated: false
                            });
                            setStopWhenUp(false);
                        }

                        if (event.nativeEvent.contentOffset.y > 200) {
                            setStopWhenUp(true);
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

                        setLastContentOffset(event.nativeEvent.contentOffset.y);
                    }
                }
            ),
        [isScrolling, isScrollingDown, lastContentOffset, scrollY, stopWhenUp]
    );

    const onScrollBeginDrag = () => setIsScrolling(true);

    const onScrollEndDrag = () => setIsScrolling(false);

    const scrollToInfo = () => {
        setIsBottomBarVisible(false);
        ref?.current?.scrollTo({
            x: 0,
            y: 800,
            animated: true
        });
    };

    return {
        scale,
        ref,
        onScroll,
        onScrollBeginDrag,
        onScrollEndDrag,
        scrollToInfo
    };
};
