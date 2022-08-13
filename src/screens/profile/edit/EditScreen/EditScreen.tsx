import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SwiperCardStyle } from '@screens/profile/edit/EditScreen/EditScreen.style';
import { ChangeProfileImage } from '@components/general/ChangeProfileImage/ChangeProfileImage';
import { PlaceTags } from '@components/registration/PlaceTags/PlaceTags';
import { PLACE_TAGS } from '@components/registration/PlaceTags/PlaceTags.const';

export const EditScreen = (): JSX.Element => (
    <SafeAreaProvider style={SwiperCardStyle.container}>
        <ChangeProfileImage />
        <PlaceTags
            tags={PLACE_TAGS}
            showAll
            style={SwiperCardStyle.placeTags}
        />
    </SafeAreaProvider>
);
