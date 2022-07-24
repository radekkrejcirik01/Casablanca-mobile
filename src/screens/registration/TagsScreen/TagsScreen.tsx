import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '@constants/COLORS';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { PlaceTags } from '@components/registration/PlaceTags/PlaceTags';
import { TagsScreenStyle } from '@screens/registration/TagsScreen/TagsScreen.style';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';

export const TagsScreen = (): JSX.Element => {
    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const continuePressed = () => {
        navigateTo(RegistrationStackNavigatorEnum.GenderScreen);
    };

    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
                locations={[0.15, 0.9]}
                style={TagsScreenStyle.container}
            >
                <Title title="Fave places to go" />
                <View style={TagsScreenStyle.placeTags}>
                    <PlaceTags />
                </View>
                <Continue onPress={continuePressed} />
            </LinearGradient>
        </SafeAreaProvider>
    );
};
