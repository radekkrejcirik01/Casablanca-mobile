import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProfileScreenStyle } from '@screens/tab/ProfileScreen/ProfileScreen.style';
import { ProfileImageView } from '@components/profile/ProfileImageView';
import { PlaceTags } from '@components/general/PlaceTags/PlaceTags';
import { IconEnum } from '@components/icon/Icon.enum';
import { IconButton } from '@components/general/IconButton/IconButton';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { PLACE_TAGS } from '@components/general/PlaceTags/PlaceTags.const';

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
                        <Text style={ProfileScreenStyle.firstname}>Radek</Text>
                        <IconButton
                            icon={IconEnum.EDIT}
                            onPress={openEdit}
                            size={21}
                        />
                    </View>
                    <Text style={ProfileScreenStyle.age}>21</Text>
                    <View style={ProfileScreenStyle.tagsView}>
                        <PlaceTags tags={PLACE_TAGS} />
                    </View>
                </View>
            </ProfileImageView>
        </SafeAreaProvider>
    );
};
