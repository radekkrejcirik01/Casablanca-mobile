import React from 'react';
import { View } from 'react-native';
import { Title } from '@components/general/Title/Title';
import { IconEnum } from '@components/icon/Icon.enum';
import { TabBarScreens } from '@navigation/navigation.enum';
import { MessagesHeaderStyle } from '@components/messages/MessagesHeader/MessagesHeader.style';
import { useNavigation } from '@hooks/useNavigation';
import { IconButton } from '@components/general/IconButton/IconButton';

export const MessagesHeader = (): JSX.Element => {
    const { navigateTo } = useNavigation();

    const openNotificationScreen = () => {
        navigateTo(TabBarScreens.NotificationScreen);
    };

    return (
        <View style={MessagesHeaderStyle.container}>
            <Title title="Chat" style={MessagesHeaderStyle.title} />
            <IconButton
                icon={IconEnum.BELL}
                size={24}
                onPress={openNotificationScreen}
            />
        </View>
    );
};
