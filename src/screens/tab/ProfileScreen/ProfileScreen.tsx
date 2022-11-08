import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ProfileScreenStyle } from '@screens/tab/ProfileScreen/ProfileScreen.style';
import { ProfileScrollView } from '@components/profile/ProfileScrollView/ProfileScrollView';
import { PlaceTags } from '@components/general/PlaceTags/PlaceTags';
import { ThemeView } from '@components/general/ThemeView/ThemeView';
import { ReducerProps } from '@store/index.props';
import { getAge } from '@functions/getAge';
import { ProfileEdit } from '@components/profile/ProfileEdit/ProfileEdit';
import { ProfileSettings } from '@components/profile/ProfileSettings/ProfileSettings';
import { Screen } from '@components/general/Screen/Screen';

export const ProfileScreen = (): JSX.Element => {
    const { birthday, firstname, photos, tags } = useSelector(
        (state: ReducerProps) => state.user
    );

    const source = useMemo(
        (): string => (photos?.length ? photos[0] : null),
        [photos]
    );

    return (
        <Screen>
            <ProfileScrollView source={source}>
                <ThemeView style={ProfileScreenStyle.themeView}>
                    <Text style={ProfileScreenStyle.firstname}>
                        {firstname}
                    </Text>
                    <Text style={ProfileScreenStyle.age}>
                        {getAge(birthday)}
                    </Text>
                    <PlaceTags
                        tags={tags}
                        style={ProfileScreenStyle.tagsView}
                    />
                    <View style={ProfileScreenStyle.underScroll}>
                        <ProfileEdit />
                        <ProfileSettings />
                    </View>
                </ThemeView>
            </ProfileScrollView>
        </Screen>
    );
};
