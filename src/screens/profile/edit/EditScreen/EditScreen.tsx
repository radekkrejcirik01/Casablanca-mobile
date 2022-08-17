import React from 'react';
import { Keyboard, Text, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { EditScreenStyle } from '@screens/profile/edit/EditScreen/EditScreen.style';
import { ChangeProfileImage } from '@components/general/ChangeProfileImage/ChangeProfileImage';
import { PlaceTags } from '@components/registration/PlaceTags/PlaceTags';
import { PLACE_TAGS } from '@components/registration/PlaceTags/PlaceTags.const';
import { KeyboardAvoidingView } from '@components/general/KeyboardAvoidingView/KeyboardAvoidingView';
import { TextArea } from '@components/general/TextArea/TextArea';
import { setSaveVisible } from '@store/SaveReducer';

export const EditScreen = (): JSX.Element => {
    const dispatch = useDispatch();

    const onChange = (value: string) => {
        dispatch(setSaveVisible(true));
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={55}
                style={EditScreenStyle.container}
            >
                <ChangeProfileImage />
                <Text style={EditScreenStyle.title}>Fave places to go</Text>
                <PlaceTags tags={PLACE_TAGS} showAll />
                <Text style={EditScreenStyle.title}>About</Text>
                <TextArea onChange={onChange} />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};
