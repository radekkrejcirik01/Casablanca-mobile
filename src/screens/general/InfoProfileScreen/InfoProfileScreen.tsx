import React, { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets
} from 'react-native-safe-area-context';
import { InfoProfileScreenStyle } from '@screens/general/InfoProfileScreen/InfoProfileScreen.style';
import { IconEnum } from '@components/icon/Icon.enum';
import { IconButton } from '@components/general/IconButton/IconButton';
import {
    InfoProfileScreenDefaultProps,
    InfoProfileScreenProps
} from '@screens/general/InfoProfileScreen/InfoProfileScreen.props';
import { SwiperCard } from '@components/swipe/SwiperCard/SwiperCard';

export const InfoProfileScreen = ({
    onClose,
    info
}: InfoProfileScreenProps): JSX.Element => {
    const { top } = useSafeAreaInsets();

    const marginTop = useMemo(
        (): StyleProp<ViewStyle> => ({ marginTop: top }),
        [top]
    );

    return (
        <SafeAreaProvider style={marginTop}>
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
        </SafeAreaProvider>
    );
};

InfoProfileScreen.deafultProps = InfoProfileScreenDefaultProps;
