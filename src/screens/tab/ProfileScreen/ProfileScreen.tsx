import React, { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ProfileScreenStyle } from '@screens/tab/ProfileScreen/ProfileScreen.style';
import { ProfileScrollView } from '@components/profile/ProfileScrollView/ProfileScrollView';
import { PlaceTags } from '@components/general/PlaceTags/PlaceTags';
import { IconEnum } from '@components/icon/Icon.enum';
import { IconButton } from '@components/general/IconButton/IconButton';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { ThemeView } from '@components/general/ThemeView/ThemeView';
import { ReducerProps } from '@store/index.props';
import { getAge } from '@functions/getAge';

export const ProfileScreen = (): JSX.Element => {
    const { birthday, firstname, photos, tags } = useSelector(
        (state: ReducerProps) => state.user
    );

    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);

    const source = useMemo(
        (): string => (photos?.length ? photos[0] : null),
        [photos]
    );

    const openSettings = useCallback(() => {
        navigateTo(RootStackNavigatorEnum.ProfileStack);
    }, [navigateTo]);

    const openEdit = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.EditScreen);
    }, [navigateTo]);

    return (
        <ProfileScrollView source={source}>
            <ThemeView style={ProfileScreenStyle.bottomContainer}>
                <View style={ProfileScreenStyle.view}>
                    <IconButton
                        icon={IconEnum.SETTINGS}
                        onPress={openSettings}
                        size={22}
                    />
                    <Text style={ProfileScreenStyle.firstname}>
                        {firstname}
                    </Text>
                    <IconButton
                        icon={IconEnum.EDIT}
                        onPress={openEdit}
                        size={21}
                    />
                </View>
                <Text style={ProfileScreenStyle.age}>{getAge(birthday)}</Text>
                <PlaceTags tags={tags} style={ProfileScreenStyle.tagsView} />
            </ThemeView>
        </ProfileScrollView>
    );
};
