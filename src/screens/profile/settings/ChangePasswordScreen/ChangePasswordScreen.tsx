import React, { useCallback, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Input } from '@components/general/Input/Input';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { ChangePasswordScreenStyle } from '@screens/profile/settings/ChangePasswordScreen/ChangePasswordScreen.style';
import { KeyboardAvoidingView } from '@components/general/KeyboardAvoidingView/KeyboardAvoidingView';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { updateRequest } from '@utils/Axios/Axios.service';
import {
    PasswordUpdateInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';
import { ReducerProps } from '@store/index.props';

export const ChangePasswordScreen = (): JSX.Element => {
    const { email } = useSelector((state: ReducerProps) => state.user);

    const [oldPassword, setOldPassword] = useState<string>(null);
    const [newPassword, setNewPassword] = useState<string>(null);

    const changePassword = useCallback(() => {
        if (!oldPassword && !newPassword) {
            Alert.alert('Please enter passwords');
            return;
        }
        if (!oldPassword) {
            Alert.alert('Please enter old password');
            return;
        }
        if (!newPassword) {
            Alert.alert('Please enter new password');
            return;
        }
        if (oldPassword === newPassword) {
            Alert.alert('Old password is same as new password');
            return;
        }

        updateRequest<ResponseInterface, PasswordUpdateInterface>(
            'user/password/update',
            {
                email,
                oldPassword,
                newPassword
            }
        ).subscribe((response: ResponseInterface) => {
            if (response?.status) {
                Alert.alert(response?.message);
                setOldPassword(null);
                setNewPassword(null);
            }
        });
    }, [email, newPassword, oldPassword]);

    return (
        <View style={ChangePasswordScreenStyle.container}>
            <Text style={ChangePasswordScreenStyle.title}>Old password</Text>
            <Input
                value={oldPassword}
                onChange={setOldPassword}
                inputType={InputTypeEnum.PASSWORD}
                autoFocus
            />
            <Text
                style={[
                    ChangePasswordScreenStyle.title,
                    ChangePasswordScreenStyle.marginTop
                ]}
            >
                New password
            </Text>
            <Input
                value={newPassword}
                onChange={setNewPassword}
                inputType={InputTypeEnum.PASSWORD}
            />
            <KeyboardAvoidingView
                behavior="padding"
                style={ChangePasswordScreenStyle.keyboardAvoiding}
                keyboardVerticalOffset={0}
            >
                <TouchableOpacity onPress={changePassword}>
                    <Text style={ChangePasswordScreenStyle.confirm}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};
