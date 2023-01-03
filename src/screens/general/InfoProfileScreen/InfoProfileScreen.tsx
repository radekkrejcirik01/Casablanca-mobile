import React from 'react';
import { InfoProfileScreenStyle } from '@screens/general/InfoProfileScreen/InfoProfileScreen.style';
import { IconEnum } from '@components/icon/Icon.enum';
import { IconButton } from '@components/general/IconButton/IconButton';
import { InfoProfileScreenProps } from '@screens/general/InfoProfileScreen/InfoProfileScreen.props';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';
import { Screen } from '@components/general/Screen/Screen';

export const InfoProfileScreen = ({
    onClose,
    info
}: InfoProfileScreenProps): JSX.Element => (
    <Screen isModalScreen style={InfoProfileScreenStyle.screen}>
        <IconButton
            icon={IconEnum.CLOSE}
            onPress={onClose}
            size={26}
            style={InfoProfileScreenStyle.iconButton}
        />
        <SwiperCard
            card={info}
            hasLike={false}
            style={InfoProfileScreenStyle.swiperCard}
        />
    </Screen>
);
