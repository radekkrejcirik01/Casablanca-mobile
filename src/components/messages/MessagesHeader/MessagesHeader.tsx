import React from 'react';
import { View } from 'react-native';
import { Title } from '@components/general/Title/Title';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { TabBarScreens } from '@navigation/navigation.enum';
import { MessagesHeaderStyle } from '@components/messages/MessagesHeader/MessagesHeader.style';
import { useNavigation } from '@hooks/useNavigation';

export const MessagesHeader = (): JSX.Element => {
    const { navigateTo } = useNavigation();

    const openNotificationScreen = () => {
        navigateTo(TabBarScreens.NavigationScreen);
    };

    return (
        <View style={MessagesHeaderStyle.container}>
            <Title title="Chat" style={MessagesHeaderStyle.title} />
            <TouchableOpacity onPress={openNotificationScreen}>
                <Icon name={IconEnum.BELL} size={24} />
            </TouchableOpacity>
        </View>
    );
};
