import React from 'react';
import { Alert, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '@constants/COLORS';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { GenderScreenStyle } from '@screens/registration/GenderScreen/GenderScreen.style';
import { GenderSelect } from '@components/registration/GenderSelect/GenderSelect';
import { ReducerProps } from '@store/index.props';
import { RegistrationScreens } from '@navigation/RootStackNavigator/RootStackNavigator.enum';

export const GenderScreen = (): JSX.Element => {
    const gender = useSelector(
        (state: ReducerProps) => state.registration.gender
    );

    const navigation = useNavigation();

    const continuePressed = () => {
        if (gender) {
            navigation.navigate(RegistrationScreens.WhoShowScreen);
        } else {
            Alert.alert('Please select option');
        }
    };

    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
                locations={[0.15, 0.9]}
                style={GenderScreenStyle.container}
            >
                <Title title="I am" />
                <View style={GenderScreenStyle.select}>
                    <GenderSelect />
                </View>
                <Continue onPress={continuePressed} />
            </LinearGradient>
        </SafeAreaProvider>
    );
};
