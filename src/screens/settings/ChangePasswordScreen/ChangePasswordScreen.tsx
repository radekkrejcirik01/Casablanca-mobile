import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Input } from '@components/general/Input/Input';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { ChangePasswordScreenStyle } from '@screens/settings/ChangePasswordScreen/ChangePasswordScreen.style';
import { KeyboardAvoidingView } from '@components/general/KeyboardAvoidingView/KeyboardAvoidingView';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';

export const ChangePasswordScreen = (): JSX.Element => {
    const confirm = () => {
        console.log('confirm');
    };

    return (
        <SafeAreaProvider style={ChangePasswordScreenStyle.container}>
            <Text style={ChangePasswordScreenStyle.title}>Old password</Text>
            <Input
                onChange={(value) => console.log(value)}
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
                onChange={(value) => console.log(value)}
                inputType={InputTypeEnum.PASSWORD}
            />
            <KeyboardAvoidingView
                behavior="padding"
                style={ChangePasswordScreenStyle.keyboardAvoiding}
                keyboardVerticalOffset={0}
            >
                <TouchableOpacity onPress={confirm}>
                    <Text style={ChangePasswordScreenStyle.confirm}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    );
};
