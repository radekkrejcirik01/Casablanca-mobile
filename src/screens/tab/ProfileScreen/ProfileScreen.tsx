import React, { useMemo, useRef } from 'react';
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
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';

export const ProfileScreen = (): JSX.Element => {
    const { birthday, firstname, photos, tags } = useSelector(
        (state: ReducerProps) => state.user
    );

    const ref = useRef(null);

    const source = useMemo(
        (): string => (photos?.length ? photos[0] : null),
        [photos]
    );

    const scrollToInfo = () => ref?.current?.scrollToInfo();

    return (
        <Screen>
            <ProfileScrollView ref={ref} source={source}>
                <ThemeView style={ProfileScreenStyle.themeView}>
                    <TouchableOpacity
                        onPress={scrollToInfo}
                        style={ProfileScreenStyle.touchableOpacity}
                    >
                        <Text style={ProfileScreenStyle.firstname}>
                            {firstname}
                        </Text>
                    </TouchableOpacity>
                    <Text style={ProfileScreenStyle.age}>
                        {getAge(birthday)}
                    </Text>
                    <PlaceTags
                        tags={tags}
                        onTagPress={scrollToInfo}
                        style={ProfileScreenStyle.tagsView}
                    />
                    <View style={ProfileScreenStyle.underScroll}>
                        <ProfileEdit style={ProfileScreenStyle.marginTop} />
                        <ProfileSettings style={ProfileScreenStyle.marginTop} />
                    </View>
                </ThemeView>
            </ProfileScrollView>
        </Screen>
    );
};
