import React, { useCallback, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { PhotoPlaceholderCardStyle } from '@components/registration/PhotoPlaceholderCard/PhotoPlaceholderCard.style';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import {
    PhotoPlaceholderCardDefaultProps,
    PhotoPlaceholderCardProps
} from '@components/registration/PhotoPlaceholderCard/PhotoPlaceholderCard.props';

export const PhotoPlaceholderCard = ({
    onPress,
    onRemove,
    photo,
    removable,
    style
}: PhotoPlaceholderCardProps): JSX.Element => {
    const pressPhoto = useCallback(() => onPress(photo), [onPress, photo]);

    const touchableOpacityStyle = useMemo(
        (): StyleProp<ViewStyle> =>
            Object.keys(style).length
                ? style
                : PhotoPlaceholderCardStyle.container,
        [style]
    );

    const source = useMemo((): Source => ({ uri: photo }), [photo]);

    const removePhoto = useCallback(() => onRemove(photo), [onRemove, photo]);

    return (
        <TouchableOpacity onPress={pressPhoto} style={touchableOpacityStyle}>
            <FastImage
                style={PhotoPlaceholderCardStyle.photo}
                source={source}
            />
            {photo && removable && (
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

PhotoPlaceholderCard.defaultProps = PhotoPlaceholderCardDefaultProps;
