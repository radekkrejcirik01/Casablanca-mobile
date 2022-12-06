import React from 'react';
import { View } from 'react-native';
import { Title } from '@components/general/Title/Title';
import { IconEnum } from '@components/icon/Icon.enum';
import { MessagesHeaderStyle } from '@components/messages/MessagesHeader/MessagesHeader.style';
import { IconButton } from '@components/general/IconButton/IconButton';
import { MessagesStackNavigatorEnum } from '@navigation/StackNavigators/messages/MessagesStackNavigator.enum';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';

export const MessagesHeader = (): JSX.Element => {
    const { navigateTo } = useNavigation(RootStackNavigatorEnum.MessagesStack);

    const openNotificationScreen = () => {
        navigateTo(MessagesStackNavigatorEnum.NotificationsScreen);
    };

    return (
        <View style={MessagesHeaderStyle.container}>
            <Title title="Chats" />
            <IconButton
                icon={IconEnum.BELL}
                size={24}
                onPress={openNotificationScreen}
            />
        </View>
    );
};
