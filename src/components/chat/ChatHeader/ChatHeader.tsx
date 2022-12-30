import React, { useCallback, useMemo } from 'react';
import { SafeAreaView, StyleProp, Text, View, ViewStyle } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FastImage, { Source } from 'react-native-fast-image';
import { useDispatch } from 'react-redux';
import { Icon } from '@components/icon/Icon';
import { ChatHeaderStyle } from '@components/chat/ChatHeader/ChatHeader.style';
import { IconEnum } from '@components/icon/Icon.enum';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { useNavigation } from '@hooks/useNavigation';
import { setModalVisible } from '@store/ModalReducer';
import COLORS from '@constants/COLORS';
import { useTheme } from '@hooks/useTheme';
import { ChatHeaderParamsProps } from '@components/chat/ChatHeader/ChatHeader.props';

export const ChatHeader = (): JSX.Element => {
    const dispatch = useDispatch();

    const { navigateBack } = useNavigation();
    const { isDarkMode } = useTheme();

    const route: ChatHeaderParamsProps = useRoute();

    const { firstname, profilePicture } = route.params;

    const openProfile = useCallback(() => {
        dispatch(setModalVisible(true));
    }, [dispatch]);

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

    const style = useMemo(
        (): StyleProp<ViewStyle> => [
            ChatHeaderStyle.container,
            backgroundColor,
            borderBottomColor
        ],
        [backgroundColor, borderBottomColor]
    );

    const title = useMemo((): string => firstname, [firstname]);

    const source = useMemo(
        (): Source => ({ uri: profilePicture }),
        [profilePicture]
    );

    return (
        <SafeAreaView style={style}>
            <TouchableOpacity onPress={navigateBack}>
                <Icon name={IconEnum.BACK} size={20} />
            </TouchableOpacity>
            <View style={ChatHeaderStyle.contentContainer}>
                <TouchableOpacity
                    onPress={openProfile}
                    style={ChatHeaderStyle.profileContainer}
                >
                    <FastImage source={source} style={ChatHeaderStyle.image} />
                    <View style={ChatHeaderStyle.infoContainer}>
                        <Text style={ChatHeaderStyle.title}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
