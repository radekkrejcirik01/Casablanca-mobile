import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Icon } from '@components/icon/Icon';
import { ChatHeaderStyle } from '@components/chat/ChatHeader/ChatHeader.style';
import { IconEnum } from '@components/icon/Icon.enum';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { useNavigation } from '@hooks/useNavigation';

export const ChatHeader = (): JSX.Element => {
    const { navigateBack } = useNavigation();

    const openProfile = () => {};

    return (
        <SafeAreaView style={ChatHeaderStyle.safeArea}>
            <View style={ChatHeaderStyle.container}>
                <TouchableOpacity onPress={navigateBack}>
                    <Icon name={IconEnum.BACK} size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={openProfile}
                    style={ChatHeaderStyle.profileContainer}
                >
                    <Image
                        source={require('../../../assets/images/profilovka.png')}
                        style={ChatHeaderStyle.image}
                    />
                    <View style={ChatHeaderStyle.infoContainer}>
                        <Text style={ChatHeaderStyle.name}>Radek</Text>
                        <Text style={ChatHeaderStyle.text}>View profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
