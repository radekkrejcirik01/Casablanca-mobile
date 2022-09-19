import React, { useMemo } from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DeleteAccountScreenStyle } from '@screens/profile/settings/DeleteAccountScreen/DeleteAccountScreen.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { useNavigation } from '@hooks/useNavigation';
import { ThemeView } from '@components/general/ThemeView/ThemeView';
import { useTheme } from '@hooks/useTheme';
import COLORS from '@constants/COLORS';

export const DeleteAccountScreen = (): JSX.Element => {
    const { navigateBack } = useNavigation();
    const { isDarkMode } = useTheme();

    const confirmDelete = () => {
        console.log('Delete account');
    };

    const textColor = useMemo(
        (): StyleProp<TextStyle> => ({
            color: isDarkMode ? COLORS.WHITE : COLORS.MAIN_BLUE
        }),
        [isDarkMode]
    );

    return (
        <SafeAreaProvider style={DeleteAccountScreenStyle.container}>
            <Text style={DeleteAccountScreenStyle.title}>
                Sorry to see you go, are you sure you want to delete this
                account?
            </Text>
            <View style={DeleteAccountScreenStyle.buttonsContainer}>
                <TouchableOpacity onPress={confirmDelete}>
                    <Text style={DeleteAccountScreenStyle.confirm}>
                        Confirm
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateBack}>
                    <ThemeView
                        isDefault={false}
                        style={DeleteAccountScreenStyle.notNowContainer}
                    >
                        <Text
                            style={[DeleteAccountScreenStyle.notNow, textColor]}
                        >
                            Not now
                        </Text>
                    </ThemeView>
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    );
};
