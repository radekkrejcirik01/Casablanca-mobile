import React from 'react';
import { View } from 'react-native';
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

    return (
        <TouchableOpacity
            onPress={onPress}
            style={PhotoPlaceholderCardStyle.container}
        >
            {photo && (
                <TouchableOpacity
                    style={PhotoPlaceholderCardStyle.closeTouchableOpacity}
                    onPress={() => {
                        dispatch(removePhotoAction(photo));
                    }}
                >
                    <View style={PhotoPlaceholderCardStyle.closeView}>
                        <Icon name={IconEnum.CLOSE} size={15} />
                    </View>
                </TouchableOpacity>
            )}
            <FastImage
                style={PhotoPlaceholderCardStyle.photo}
                source={{ uri: photo }}
            />
        </TouchableOpacity>
    );
};
