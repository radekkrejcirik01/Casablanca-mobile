import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PhotoPlaceholder } from '@components/registration/PhotoPlaceholder/PhotoPlaceholder';
import { usePhotoPicker } from '@hooks/usePhotoPicker';
import { PhotoEditStyle } from '@components/profile/PhotoEdit/PhotoEdit.style';
import { Title } from '@components/general/Title/Title';
import { Screen } from '@components/general/Screen/Screen';
import { SaveButton } from '@components/general/SaveButton/SaveButton';
import { isArrayEqual } from '@functions/checking-functions';
import { setSaveVisible } from '@store/SaveReducer';
import { setPhotosAction, setProfilePictureAction } from '@store/UserReducer';
import { DoneButton } from '@components/general/DoneButton/DoneButton';
import { PhotoEditProps } from '@components/profile/PhotoEdit/PhotoEdit.props';
import { updateRequest } from '@utils/Axios/Axios.service';
import {
    PhotosInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';
import { ReducerProps } from '@store/index.props';

export const PhotoEdit = ({ photos, onClose }: PhotoEditProps): JSX.Element => {
    const { email } = useSelector((state: ReducerProps) => state.user);
    const dispatch = useDispatch();

    const { onPhotoPress, onPhotoRemove, photosValue } = usePhotoPicker(photos);

    const [isDoneVisible, setIsDoneVisible] = useState<boolean>(true);

    useEffect(() => {
        if (!isArrayEqual(photosValue, photos)) {
            dispatch(setSaveVisible(true));
            setIsDoneVisible(false);
        }
    }, [dispatch, photos, photosValue]);

    const savePhotos = useCallback(() => {
        updateRequest<ResponseInterface, PhotosInterface>(
            'user/photos/update',
            {
                user: email,
                photos: photosValue
            }
        ).subscribe();

        dispatch(setPhotosAction(photosValue));
        dispatch(setProfilePictureAction(photosValue[0]));
        onClose();
    }, [dispatch, email, onClose, photosValue]);

    const onPressSaveButton = useCallback(() => {
        if (photosValue?.length) {
            savePhotos();
        } else {
            setIsDoneVisible(true);
            Alert.alert('Please select at least one photo');
        }
    }, [photosValue, savePhotos]);

    const onPressDoneButton = useCallback(() => {
        onClose();
    }, [onClose]);

    const doneButton = useMemo(
        (): JSX.Element =>
            isDoneVisible && <DoneButton onPress={onPressDoneButton} />,
        [isDoneVisible, onPressDoneButton]
    );

    return (
        <Screen isModalScreen style={PhotoEditStyle.screen}>
            <View style={PhotoEditStyle.header}>
                <Title title="Profile photos" />
                <SaveButton onPress={onPressSaveButton} />
                {doneButton}
            </View>
            <PhotoPlaceholder
                onPress={onPhotoPress}
                onRemove={onPhotoRemove}
                photos={photosValue}
                photosNumber={4}
                style={PhotoEditStyle.photoPlaceholder}
            />
        </Screen>
    );
};
