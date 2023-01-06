import React from 'react';
import { Swiper } from '@components/swipe/Swiper/Swiper';
import { SwipeHeader } from '@components/swipe/SwipeHeader/SwipeHeader';
import { Screen } from '@components/general/Screen/Screen';
import { ScreenEdgesEnum } from '@components/general/Screen/Screen.enum';
import { useLastActive } from '@hooks/useLastActive';
import { useMessaging } from '@hooks/useMessaging';

export const SwipeScreen = (): JSX.Element => {
    useLastActive();
    useMessaging();

    return (
        <Screen edges={[ScreenEdgesEnum.TOP]}>
            <SwipeHeader />
            <Swiper />
        </Screen>
    );
};
