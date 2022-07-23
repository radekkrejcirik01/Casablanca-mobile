import React, { createRef, useEffect } from 'react';
import { Alert, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '@constants/COLORS';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { Input } from '@components/general/Input/Input';
import { FirstnameScreenStyle } from '@screens/registration/FirstnameScreen/FirstnameScreen.style';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { setFirstnameAction } from '@store/RegistrationReducer';
import { ReducerProps } from '@store/index.props';
import { RegistrationScreens } from '@navigation/RootStackNavigator/RootStackNavigator.enum';

export const FirstnameScreen = (): JSX.Element => {
    const firstname = useSelector(
        (state: ReducerProps) => state.registration.firstname
    );

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const input = createRef<TextInput>();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            input.current?.focus();
        });
        return unsubscribe;
    }, [navigation, input]);

    const continuePressed = () => {
        if (firstname) {
            navigation.navigate(RegistrationScreens.EmailScreen);
        } else {
            Alert.alert('Please select firstname');
        }
    };

    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
                locations={[0.15, 0.9]}
                style={FirstnameScreenStyle.container}
            >
                <Title title="What is your firstname?" />
                <View style={FirstnameScreenStyle.inputContainer}>
                    <Input
                        ref={input}
                        inputType={InputTypeEnum.TEXT}
                        autoFocus
                        onChange={(value: string) =>
                            dispatch(setFirstnameAction(value))
                        }
                        iconRight={<Icon name={IconEnum.PROFILE} size={25} />}
                    />
                </View>
                <Continue onPress={continuePressed} />
            </LinearGradient>
        </SafeAreaProvider>
    );
};
