import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { PhotosScreenStyle } from '@screens/registration/PhotosScreen/PhotosScreen.style';
import { PhotoPlaceholder } from '@components/registration/PhotoPlaceholder/PhotoPlaceholder';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';

export const PhotosScreen = (): JSX.Element => {
    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const continuePressed = () => {
        navigateTo(RegistrationStackNavigatorEnum.FavePlacesScreen);
    };

    return (
        <SafeAreaProvider>
            <Title title="Choose photos" />
            <View style={PhotosScreenStyle.photoPlaceholderContainer}>
                <PhotoPlaceholder />
            </View>
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
