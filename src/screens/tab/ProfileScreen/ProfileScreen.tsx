import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ProfileScreenStyle } from '@screens/tab/ProfileScreen/ProfileScreen.style';
import { ProfileImageView } from '@components/profile/ProfileImageView';
import { PlaceTags } from '@components/registration/PlaceTags/PlaceTags';

export const ProfileScreen = (): JSX.Element => (
    <SafeAreaProvider style={ProfileScreenStyle.container}>
        <ProfileImageView source="">
            <View style={ProfileScreenStyle.bottomContainer}>
                <Text style={ProfileScreenStyle.firstname}>firstname</Text>
                <Text style={ProfileScreenStyle.age}>20</Text>
                <View style={ProfileScreenStyle.tagsView}>
                    <PlaceTags />
                </View>
            </View>
        </ProfileImageView>
    </SafeAreaProvider>
);
