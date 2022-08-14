import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginScreenStyle } from '@screens/login/Login/LoginScreen.style';
import { Input } from '@components/general/Input/Input';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { useNavigation } from '@hooks/useNavigation';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';

export const LoginScreen = (): JSX.Element => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const dispatch = useDispatch();
    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const loginPressed = () => {};
    const registerPressed = () => {
        navigateTo(RegistrationStackNavigatorEnum.FirstnameScreen);
    };

    return (
        <SafeAreaProvider>
            <View style={LoginScreenStyle.inputView}>
                <Input
                    placeholder="Username"
                    onChange={setUsername}
                    inputType={InputTypeEnum.TEXT}
                    iconRight={<Icon name={IconEnum.PROFILE} size={25} />}
                />
                <Input
                    placeholder="Password"
                    onChange={setPassword}
                    inputType={InputTypeEnum.PASSWORD}
                />
            </View>
            <TouchableOpacity onPress={loginPressed}>
                <Text style={LoginScreenStyle.loginText}>Log In 👉</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={registerPressed}>
                <Text style={LoginScreenStyle.registerText}>
                    No account yet? Create one
                </Text>
            </TouchableOpacity>
        </SafeAreaProvider>
    );
};
