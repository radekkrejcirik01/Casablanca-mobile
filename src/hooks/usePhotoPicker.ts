import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import ImagePicker, {
    ImageOrVideo,
    Options
} from 'react-native-image-crop-picker';
import {
    addPhotoAction,
    removePhotoAction,
    replacePhotoAction
} from '@store/UserReducer';

export const usePhotoPicker = (): {
    onPhotoPress: (photo: string) => void;
    onPhotoRemove: (photo: string) => void;
} => {
    const dispatch = useDispatch();

    const ImagePickerOptions = useMemo(
        (): Options => ({
            width: 700,
            height: 800,
            cropping: true,
            waitAnimationEnd: false
        }),
        []
    );

    const onPhotoPress = useCallback(
        (photo: string) => {
            ImagePicker.openPicker(ImagePickerOptions)
                .then((image: ImageOrVideo) => {
                    if (photo) {
                        dispatch(
                            replacePhotoAction({
                                photo1: photo,
                                photo2: image.path
                            })
                        );
                    } else {
                        dispatch(addPhotoAction(image.path));
                    }
                })
                .catch(() => {});
        },
        [dispatch, ImagePickerOptions]
    );

    const onPhotoRemove = useCallback(
        (photo: string) => dispatch(removePhotoAction(photo)),
        [dispatch]
    );

    return { onPhotoPress, onPhotoRemove };
};
