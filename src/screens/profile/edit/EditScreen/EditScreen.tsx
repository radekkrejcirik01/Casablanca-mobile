import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SwiperCardStyle } from '@screens/profile/edit/EditScreen/EditScreen.style';
import { ChangeProfileImage } from '@components/general/ChangeProfileImage/ChangeProfileImage';
import { PlaceTags } from '@components/registration/PlaceTags/PlaceTags';
import { PLACE_TAGS } from '@components/registration/PlaceTags/PlaceTags.const';
import { TextArea } from '@components/general/TextArea/TextArea';
import { setSaveVisible } from '@store/SaveReducer';

export const EditScreen = (): JSX.Element => {
    const dispatch = useDispatch();

    const onChange = (value: string) => {
        dispatch(setSaveVisible(true));
    };

    return (
        <SafeAreaProvider style={SwiperCardStyle.container}>
            <Text style={SwiperCardStyle.title}>Profile picture</Text>
            <ChangeProfileImage />
            <Text style={SwiperCardStyle.title}>Fave places to go</Text>
            <PlaceTags tags={PLACE_TAGS} showAll />
            <Text style={SwiperCardStyle.title}>About</Text>
            <TextArea onChange={onChange} />
        </SafeAreaProvider>
    );
};
