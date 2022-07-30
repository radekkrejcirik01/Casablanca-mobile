import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProfileScreenStyle } from '@screens/tab/ProfileScreen/ProfileScreen.style';
import { ProfileImageView } from '@components/profile/ProfileImageView';
import { PlaceTags } from '@components/registration/PlaceTags/PlaceTags';
import { IconEnum } from '@components/icon/Icon.enum';
import { IconButton } from '@components/general/IconButton/IconButton';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';

export const ProfileScreen = (): JSX.Element => {
    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);

    const openSettings = () => {
        navigateTo(RootStackNavigatorEnum.ProfileStack);
    };

    const openEdit = () => {
        navigateTo(ProfileStackNavigatorEnum.EditScreen);
    };

    return (
        <SafeAreaProvider>
            <ProfileImageView source="">
                <View style={ProfileScreenStyle.bottomContainer}>
                    <View style={ProfileScreenStyle.view}>
                        <IconButton
                            icon={IconEnum.SETTINGS}
                            onPress={openSettings}
                            size={22}
                        />
                        <Text style={ProfileScreenStyle.firstname}>
                            firstname
                        </Text>
                        <IconButton
                            icon={IconEnum.EDIT}
                            onPress={openEdit}
                            size={21}
                        />
                    </View>
                    <Text style={ProfileScreenStyle.age}>20</Text>
                    <View style={ProfileScreenStyle.tagsView}>
                        <PlaceTags />
                    </View>
                </View>
            </ProfileImageView>
        </SafeAreaProvider>
    );
};
