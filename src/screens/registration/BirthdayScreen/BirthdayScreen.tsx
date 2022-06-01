import React from 'react';
import { Alert, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '@constants/Colors';
import { Continue } from '@components/registration/Continue/Continue';
import { RegisterNavigatorScreens } from '@navigation/navigation.enum';
import { Title } from '@components/registration/Title/Title';
import { BirthdayScreenStyle } from '@screens/registration/BirthdayScreen/BirthdayScreen.style';
import { BirthdayInput } from '@components/registration/BirthdayInput/BirthdayInput';
import { getAge } from '@functions/getAge';
import { ReducerProps } from '@store/index.props';

export const BirthdayScreen = (): JSX.Element => {
    const birthday = useSelector(
        (state: ReducerProps) => state.registration.birthday
    );

    const navigation = useNavigation();

    const continuePressed = () => {
        const birthdayValue = `${birthday.year}/${birthday.month}/${birthday.day}`;

        if (getAge(birthdayValue) >= 18) {
            navigation.navigate(RegisterNavigatorScreens.PhotosScreen);
        }
        if (getAge(birthdayValue) < 18) {
            Alert.alert('Sorry, Casablanca is only for people older 18');
        }
        if (!getAge(birthdayValue)) {
            Alert.alert('Sorry, invalid birthday');
        }
    };

    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={[Colors.MAIN_RED, Colors.MAIN_BLUE]}
                locations={[0.15, 0.9]}
                style={BirthdayScreenStyle.container}
            >
                <Title title="When is your birthday?" />
                <View style={BirthdayScreenStyle.inputContainer}>
                    <BirthdayInput birthday={birthday} />
                </View>
                <Continue onPress={continuePressed} />
            </LinearGradient>
        </SafeAreaProvider>
    );
};
