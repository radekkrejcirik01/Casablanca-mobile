import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title } from '@components/general/Title/Title';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { TabBarScreens } from '@navigation/navigation.enum';
import { ChatHeaderStyle } from '@components/chat/ChatHeader/ChatHeader.style';

export const ChatHeader = (): JSX.Element => {
    const navigation = useNavigation();

    const openNotificationScreen = () => {
        navigation.navigate(TabBarScreens.NavigationScreen);
    };

    return (
        <View style={ChatHeaderStyle.container}>
            <Title title="Chat" style={ChatHeaderStyle.title} />
            <TouchableOpacity onPress={openNotificationScreen}>
                <Icon name={IconEnum.BELL} size={24} />
            </TouchableOpacity>
        </View>
    );
};
