import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '@constants/COLORS';
import { Continue } from '@components/registration/Continue/Continue';
import { RegisterNavigatorScreens } from '@navigation/navigation.enum';
import { Title } from '@components/registration/Title/Title';
import { PlaceTags } from '@components/registration/PlaceTags/PlaceTags';
import { TagsScreenStyle } from '@screens/registration/TagsScreen/TagsScreen.style';

export const TagsScreen = (): JSX.Element => {
    const navigation = useNavigation();

    const continuePressed = () => {
        navigation.navigate(RegisterNavigatorScreens.GenderScreen);
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
