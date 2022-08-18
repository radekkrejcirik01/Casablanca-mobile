import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { PlaceTags } from '@components/general/PlaceTags/PlaceTags';
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
            <Title title="Fave places to go" />
            <PlaceTags tags={[]} showAll style={TagsScreenStyle.placeTags} />
            <Continue onPress={continuePressed} />
        </SafeAreaProvider>
    );
};
