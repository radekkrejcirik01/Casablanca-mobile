import React from 'react';
import { View } from 'react-native';
import { Title } from '@components/general/Title/Title';
import { IconEnum } from '@components/icon/Icon.enum';
import { SwipeHeaderStyle } from '@components/swipe/SwipeHeader/SwipeHeader.style';
import { IconButton } from '@components/general/IconButton/IconButton';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { SwipeStackNavigatorEnum } from '@navigation/StackNavigators/swipe/SwipeStackNavigator.enum';

export const SwipeHeader = (): JSX.Element => {
    const { navigateTo } = useNavigation(RootStackNavigatorEnum.SwipeStack);

    const openNotificationScreen = () => {
        navigateTo(SwipeStackNavigatorEnum.FiltersScreen);
    };

    return (
        <View style={SwipeHeaderStyle.container}>
            <Title title="Discover" />
            <IconButton
                icon={IconEnum.TUNE}
                size={31}
                onPress={openNotificationScreen}
            />
        </View>
    );
};
