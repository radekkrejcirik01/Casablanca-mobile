import React, { useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '@components/general/Title/Title';
import { PhotosScreenStyle } from '@screens/registration/PhotosScreen/PhotosScreen.style';
import { PhotoPlaceholder } from '@components/registration/PhotoPlaceholder/PhotoPlaceholder';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { ReducerProps } from '@store/index.props';
import { ContinueButton } from '@components/registration/ContinueButton/ContinueButton';
import { usePhotoPicker } from '@hooks/usePhotoPicker';
import { setPhotosAction } from '@store/UserReducer';

export const PhotosScreen = (): JSX.Element => {
    const photos = useSelector((state: ReducerProps) => state.user.photos);

    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const { onPhotoPress, onPhotoRemove, photosValue } = usePhotoPicker(photos);

    useEffect(() => {
        dispatch(setPhotosAction(photosValue));
    }, [dispatch, photosValue]);

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
                onPress={onPhotoPress}
                onRemove={onPhotoRemove}
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
