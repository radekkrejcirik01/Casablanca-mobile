import React, { useMemo, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ViewPager from '@react-native-community/viewpager';
import * as Animatable from 'react-native-animatable';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import {
    CardDataProps,
    SwiperProps
} from '@components/swipe/Swiper/Swiper.props';
import { SwiperStyle } from '@components/swipe/Swiper/Swiper.style';
import { IconEnum } from '@components/icon/Icon.enum';
import { Icon } from '@components/icon/Icon';
import { usePullToRefresh } from '@hooks/usePullToRefresh';
import { Modal } from '@components/general/Modal/Modal';
import { useModal } from '@hooks/useModal';
import { InfoProfileScreen } from '@screens/general/InfoProfileScreen/InfoProfileScreen';
import { InfoProps } from '@screens/general/InfoProfileScreen/InfoProfileScreen.props';

export const Swiper = ({ data }: SwiperProps): JSX.Element => {
    const { name } = data[0];
    const [info, setInfo] = useState<InfoProps>(null);

    const { top } = useSafeAreaInsets();

    const {
        isAnimation,
        onPageScroll,
        onPageScrollStateChanged,
        onPageSelected,
        onCardTouch
    } = usePullToRefresh(name);

    const { modalVisible, showModal, hideModal } = useModal();

    const paddingTop = useMemo(
        (): StyleProp<ViewStyle> => ({ paddingTop: top || 10 }),
        [top]
    );

    const modalContent = useMemo(
        (): JSX.Element => (
            <InfoProfileScreen onClose={hideModal} info={info} />
        ),
        [hideModal, info]
    );

    const onInfoTouch = (
        image$: Array<string>,
        name$: string,
        age$: string
    ) => {
        setInfo({ images: image$, name: name$, age: age$ });
        showModal();
    };

    return (
        <View style={SwiperStyle.container}>
            {isAnimation && (
                <Animatable.View
                    animation="bounceIn"
                    style={[SwiperStyle.animatableView, paddingTop]}
                >
                    <Icon name={IconEnum.FLASH_FILLED} size={38} />
                </Animatable.View>
            )}
            <ViewPager
                orientation="vertical"
                initialPage={0}
                onPageScroll={onPageScroll}
                onPageScrollStateChanged={onPageScrollStateChanged}
                onPageSelected={onPageSelected}
                style={SwiperStyle.viewPager}
            >
                {data.map((source: CardDataProps) => (
                    <SwiperCard
                        key={source.name}
                        card={source}
                        onCardTouch={onCardTouch}
                        onInfoTouch={onInfoTouch}
                    />
                ))}
            </ViewPager>
            <Modal
                isVisible={modalVisible}
                backdropOpacity={0.1}
                content={modalContent}
                onClose={hideModal}
            />
        </View>
    );
};
