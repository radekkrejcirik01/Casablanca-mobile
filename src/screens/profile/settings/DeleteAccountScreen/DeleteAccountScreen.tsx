import React, { useCallback, useMemo } from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteAccountScreenStyle } from '@screens/profile/settings/DeleteAccountScreen/DeleteAccountScreen.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { useNavigation } from '@hooks/useNavigation';
import { ThemeView } from '@components/general/ThemeView/ThemeView';
import { useTheme } from '@hooks/useTheme';
import COLORS from '@constants/COLORS';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    AccountDeleteInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';
import { ReducerProps } from '@store/index.props';
import { resetUserState } from '@store/UserReducer';
import { PersistStorage } from '@utils/PersistStorage/PersistStorage';
import { PersistStorageKeys } from '@utils/PersistStorage/PersistStorage.enum';
import { setDeviceTokenAction } from '@store/DeviceReducer';

export const DeleteAccountScreen = (): JSX.Element => {
    const { email } = useSelector((state: ReducerProps) => state.user);
    const dispatch = useDispatch();

    const { navigateBack } = useNavigation();
    const { isDarkMode } = useTheme();

    const deleteAccount = useCallback(() => {
        postRequest<ResponseInterface, AccountDeleteInterface>(
            'https://w2gdfxt8dc.execute-api.eu-central-1.amazonaws.com/user/delete/user',
            {
                email
            }
        ).subscribe((response: ResponseInterface) => {
            if (response?.status) {
                dispatch(resetUserState());
                dispatch(setDeviceTokenAction(null));
                PersistStorage.setItem(PersistStorageKeys.TOKEN, '').catch();
            }
        });
    }, [dispatch, email]);

    const textColor = useMemo(
        (): StyleProp<TextStyle> => ({
            color: isDarkMode ? COLORS.WHITE : COLORS.MAIN_BLUE
        }),
        [isDarkMode]
    );

    return (
        <View style={DeleteAccountScreenStyle.container}>
            <Text style={DeleteAccountScreenStyle.title}>
                We are sorry to see you go. Are you sure you want to delete this
                account?
            </Text>
            <View style={DeleteAccountScreenStyle.buttonsContainer}>
                <TouchableOpacity onPress={deleteAccount}>
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
        </View>
    );
};
