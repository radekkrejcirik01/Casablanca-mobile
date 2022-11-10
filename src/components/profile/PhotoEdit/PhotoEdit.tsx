import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import { DoneButton } from '@components/general/DoneButton/DoneButton';
import { PhotoEditProps } from '@components/profile/PhotoEdit/PhotoEdit.props';

export const PhotoEdit = ({ photos, onClose }: PhotoEditProps): JSX.Element => {
    const dispatch = useDispatch();

    const { onPhotoPress, onPhotoRemove, photosValue } = usePhotoPicker(photos);

    const [isDoneVisible, setIsDoneVisible] = useState<boolean>(true);

    useEffect(() => {
        if (!isArrayEqual(photosValue, photos)) {
            dispatch(setSaveVisible(true));
            setIsDoneVisible(false);
        }
    }, [dispatch, photos, photosValue]);

    const onPressSaveButton = useCallback(() => {
        dispatch(setPhotosAction(photosValue));
        onClose();
    }, [dispatch, onClose, photosValue]);

    const onPressDoneButton = useCallback(() => {
        onClose();
    }, [onClose]);

    const doneButton = useMemo(
        (): JSX.Element =>
            isDoneVisible && <DoneButton onPress={onPressDoneButton} />,
        [isDoneVisible, onPressDoneButton]
    );

    return (
        <Screen style={PhotoEditStyle.view}>
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
