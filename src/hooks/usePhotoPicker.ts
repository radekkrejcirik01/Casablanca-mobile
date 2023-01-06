import { useCallback, useMemo, useState } from 'react';
import ImagePicker, {
    ImageOrVideo,
    Options
} from 'react-native-image-crop-picker';

export const usePhotoPicker = (
    photos: Array<string>
): {
    onPhotoPress: (photo: string) => void;
    onPhotoRemove: (photo: string) => void;
    photosValue: Array<string>;
} => {
    const [photosValue, setPhotosValue] = useState<Array<string>>(photos);

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
        (value: string) => {
            ImagePicker.openPicker(ImagePickerOptions)
                .then((image: ImageOrVideo) => {
                    if (value) {
                        const array = photosValue.map((item: string) =>
                            item === value ? image.path : item
                        );

                        setPhotosValue(array);
                    } else {
                        setPhotosValue([...photosValue, image.path]);
                    }
                })
                .catch(() => {});
        },
        [ImagePickerOptions, photosValue]
    );

    const onPhotoRemove = useCallback(
        (photo: string) => {
            let arr: Array<string> = photosValue;
            arr = arr.filter((value: string) => value !== photo);
            setPhotosValue(arr);
        },
        [photosValue]
    );

    return { onPhotoPress, onPhotoRemove, photosValue };
};
