import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { Title } from '@components/general/Title/Title';
import { PhotosScreenStyle } from '@screens/registration/PhotosScreen/PhotosScreen.style';
import { PhotoPlaceholder } from '@components/registration/PhotoPlaceholder/PhotoPlaceholder';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { ReducerProps } from '@store/index.props';
import { addPhotoAction, removePhotoAction } from '@store/UserReducer';
import { ContinueButton } from '@components/registration/ContinueButton/ContinueButton';
import { ImagePickerOptions } from '@screens/registration/PhotosScreen/PhotosScreen.options';

export const PhotosScreen = (): JSX.Element => {
    const photos = useSelector((state: ReducerProps) => state.user.photos);
    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const onPress = useCallback(() => {
        ImagePicker.openPicker(ImagePickerOptions).then(
            (image: ImageOrVideo) => {
                dispatch(addPhotoAction(image.path));
            }
        );
    }, [dispatch]);

    const onRemove = useCallback(
        (photo: string) => dispatch(removePhotoAction(photo)),
        [dispatch]
    );

    const continuePressed = useCallback(() => {
        if (photos?.length) {
            navigateTo(RegistrationStackNavigatorEnum.TagsScreen);
        } else {
            Alert.alert('Please select at least 1 profile photo');
        }
    }, [navigateTo, photos?.length]);

    return (
        <>
            <Title
                title="Photos for your profile"
                style={PhotosScreenStyle.title}
            />
            <PhotoPlaceholder
                onPress={onPress}
                onRemove={onRemove}
                photos={photos}
                photosNumber={4}
                style={PhotosScreenStyle.photoPlaceholder}
            />
            <ContinueButton
                onPress={continuePressed}
                style={PhotosScreenStyle.continue}
            />
        </>
    );
};
