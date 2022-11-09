import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { PhotoPlaceholder } from '@components/registration/PhotoPlaceholder/PhotoPlaceholder';
import { usePhotoPicker } from '@hooks/usePhotoPicker';
import { PhotoEditStyle } from '@components/profile/PhotoEdit/PhotoEdit.style';
import { Title } from '@components/general/Title/Title';
import { Screen } from '@components/general/Screen/Screen';
import { SaveButton } from '@components/general/SaveButton/SaveButton';
import { isArrayEqual } from '@functions/checking-functions';
import { setSaveVisible } from '@store/SaveReducer';
import { setPhotosAction } from '@store/UserReducer';

export const PhotoEdit = ({
    photos
}: {
    photos: Array<string>;
}): JSX.Element => {
    const dispatch = useDispatch();

    const { onPhotoPress, onPhotoRemove, photosValue } = usePhotoPicker(photos);

    useEffect(() => {
        if (!isArrayEqual(photosValue, photos)) {
            dispatch(setSaveVisible(true));
        }
    }, [dispatch, photos, photosValue]);

    const onPressSaveButton = useCallback(() => {
        dispatch(setPhotosAction(photosValue));
    }, [dispatch, photosValue]);

    return (
        <Screen style={PhotoEditStyle.view}>
            <View style={PhotoEditStyle.header}>
                <Title title="Choose photos" />
                <SaveButton onPress={onPressSaveButton} />
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
