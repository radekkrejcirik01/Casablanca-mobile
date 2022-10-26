import React, { useCallback } from 'react';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { PhotoPlaceholderCardStyle } from '@components/registration/PhotoPlaceholderCard/PhotoPlaceholderCard.style';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { PhotoPlaceholderCardProps } from '@components/registration/PhotoPlaceholderCard/PhotoPlaceholderCard.props';

export const PhotoPlaceholderCard = ({
    onPress,
    onRemove,
    photo
}: PhotoPlaceholderCardProps): JSX.Element => {
    const removePhoto = useCallback(() => onRemove(photo), [onRemove, photo]);

    return (
        <TouchableOpacity
            onPress={onPress}
            style={PhotoPlaceholderCardStyle.container}
        >
            <FastImage
                style={PhotoPlaceholderCardStyle.photo}
                source={{ uri: photo }}
            />
            {photo && (
                <TouchableOpacity
                    style={PhotoPlaceholderCardStyle.closeTouchableOpacity}
                    onPress={removePhoto}
                >
                    <Icon
                        name={IconEnum.CLOSE}
                        size={15}
                        style={PhotoPlaceholderCardStyle.closeIcon}
                    />
                </TouchableOpacity>
            )}
        </TouchableOpacity>
    );
};
