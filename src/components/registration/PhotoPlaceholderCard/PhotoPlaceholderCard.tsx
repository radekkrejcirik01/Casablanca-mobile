import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { PhotoPlaceholderCardStyle } from '@components/registration/PhotoPlaceholderCard/PhotoPlaceholderCard.style';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { PhotoPlaceholderCardProps } from '@components/registration/PhotoPlaceholderCard/PhotoPlaceholderCard.props';
import { addPhotoAction, removePhotoAction } from '@store/RegistrationReducer';

export const PhotoPlaceholderCard = ({
    photo
}: PhotoPlaceholderCardProps): JSX.Element => {
    const dispatch = useDispatch();

    const onPress = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then((image: ImageOrVideo) => {
            dispatch(addPhotoAction(image.path));
        });
    };

    const removePhoto = useCallback(
        () => dispatch(removePhotoAction(photo)),
        [dispatch, photo]
    );

    return (
        <TouchableOpacity
            onPress={onPress}
            style={PhotoPlaceholderCardStyle.container}
        >
            {photo && (
                <TouchableOpacity
                    style={PhotoPlaceholderCardStyle.closeTouchableOpacity}
                    onPress={removePhoto}
                >
                    <Icon
                        name={IconEnum.CLOSE}
                        size={15}
                        style={PhotoPlaceholderCardStyle.closeView}
                    />
                </TouchableOpacity>
            )}
            <FastImage
                style={PhotoPlaceholderCardStyle.photo}
                source={{ uri: photo }}
            />
        </TouchableOpacity>
    );
};
