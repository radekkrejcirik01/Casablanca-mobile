import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Title } from '@components/general/Title/Title';
import { PhotosScreenStyle } from '@screens/registration/PhotosScreen/PhotosScreen.style';
import { PhotoPlaceholder } from '@components/registration/PhotoPlaceholder/PhotoPlaceholder';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { useNavigation } from '@hooks/useNavigation';
import { RegistrationStackNavigatorEnum } from '@navigation/StackNavigators/registration/RegistrationStackNavigator.enum';
import { ReducerProps } from '@store/index.props';
import { addPhotoAction } from '@store/RegistrationReducer';
import { ContinueButton } from '@components/registration/ContinueButton/ContinueButton';

export const PhotosScreen = (): JSX.Element => {
    const photos = useSelector(
        (state: ReducerProps) => state.registration.photos
    );
    const dispatch = useDispatch();

    const { navigateTo } = useNavigation(
        RootStackNavigatorEnum.RegistrationStack
    );

    const onPress = useCallback(() => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then((image: ImageOrVideo) => {
            dispatch(addPhotoAction(image.path));
        });
    }, [dispatch]);

    const continuePressed = useCallback(() => {
        if (photos?.length) {
            navigateTo(RegistrationStackNavigatorEnum.TagsScreen);
        } else {
            Alert.alert('Please select at least 1 profile photo');
        }
    }, [navigateTo, photos?.length]);

    return (
        <SafeAreaProvider>
            <Title
                title="Photos for your profile"
                style={PhotosScreenStyle.title}
            />
            <PhotoPlaceholder
                onPress={onPress}
                photos={photos}
                style={PhotosScreenStyle.photoPlaceholder}
            />
            <ContinueButton
                onPress={continuePressed}
                style={PhotosScreenStyle.continue}
            />
        </SafeAreaProvider>
    );
};
