import React, { useMemo } from 'react';
import { SafeAreaView, StyleProp, Text, View, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';
import { Icon } from '@components/icon/Icon';
import { ChatHeaderStyle } from '@components/chat/ChatHeader/ChatHeader.style';
import { IconEnum } from '@components/icon/Icon.enum';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { useNavigation } from '@hooks/useNavigation';
import { setModalVisible } from '@store/ModalReducer';
import COLORS from '@constants/COLORS';
import { useTheme } from '@hooks/useTheme';

export const ChatHeader = (): JSX.Element => {
    const dispatch = useDispatch();

    const { navigateBack } = useNavigation();
    const { isDarkMode } = useTheme();

    const openProfile = () => {
        dispatch(setModalVisible(true));
    };

    const backgroundColor = useMemo(
        (): StyleProp<ViewStyle> => ({
            backgroundColor: isDarkMode ? COLORS.BLACK : COLORS.MAIN_BLUE
        }),
        [isDarkMode]
    );

    const borderBottomColor = useMemo(
        (): StyleProp<ViewStyle> => ({
            borderBottomColor: isDarkMode
                ? COLORS.BLACK_300
                : COLORS.MAIN_BLUE_100
        }),
        [isDarkMode]
    );

    return (
        <SafeAreaView
            style={[
                ChatHeaderStyle.container,
                backgroundColor,
                borderBottomColor
            ]}
        >
            <TouchableOpacity onPress={navigateBack}>
                <Icon name={IconEnum.BACK} size={20} />
            </TouchableOpacity>
            <View style={ChatHeaderStyle.contentContainer}>
                <TouchableOpacity
                    onPress={openProfile}
                    style={ChatHeaderStyle.profileContainer}
                >
                    <FastImage
                        source={require('../../../assets/images/profilovka.png')}
                        style={ChatHeaderStyle.image}
                    />
                    <View style={ChatHeaderStyle.infoContainer}>
                        <Text style={ChatHeaderStyle.name}>Radek</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
