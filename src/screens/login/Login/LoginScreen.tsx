import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { LoginScreenStyle } from '@screens/login/Login/LoginScreen.style';
import COLORS from '@constants/COLORS';
import { Input } from '@components/general/Input/Input';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { useNavigation } from '@react-navigation/native';
import { RegisterNavigatorScreens } from '@navigation/navigation.enum';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';

export const LoginScreen = (): JSX.Element => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const loginPressed = () => {};
    const registerPressed = () => {
        navigation.navigate(RegisterNavigatorScreens.FirstnameScreen);
    };

    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
                locations={[0.15, 0.9]}
                style={LoginScreenStyle.container}
            >
                <SafeAreaView>
                    <View style={LoginScreenStyle.inputView}>
                        <Input
                            placeholder="Username"
                            onChange={setUsername}
                            inputType={InputTypeEnum.TEXT}
                            iconRight={
                                <Icon name={IconEnum.PROFILE} size={25} />
                            }
                        />
                        <Input
                            placeholder="Password"
                            onChange={setPassword}
                            inputType={InputTypeEnum.PASSWORD}
                        />
                    </View>
                    <TouchableOpacity onPress={loginPressed}>
                        <Text style={LoginScreenStyle.loginText}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={registerPressed}>
                        <Text style={LoginScreenStyle.registerText}>
                            No account yet? Create one
                        </Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </LinearGradient>
        </SafeAreaProvider>
    );
};
