import React from 'react';
import { View } from 'react-native';
import { PhotoPlaceholderStyle } from '@components/registration/PhotoPlaceholder/PhotoPlaceholder.style';
import { PhotoPlaceholderCard } from '@components/registration/PhotoPlaceholderCard/PhotoPlaceholderCard';
import {
    PhotoPlaceholderDefaultProps,
    PhotoPlaceholderProps
} from '@components/registration/PhotoPlaceholder/PhotoPlaceholder.props';

export const PhotoPlaceholder = ({
    onPress,
    onRemove,
    photos,
    photosNumber,
    style
}: PhotoPlaceholderProps): JSX.Element => (
    <View style={[style, PhotoPlaceholderStyle.containerCard]}>
        {[...Array(photosNumber).keys()].map((value: number) => (
            <PhotoPlaceholderCard
                key={value}
                onPress={onPress}
                onRemove={onRemove}
                photo={photos[value]}
            />
        ))}
    </View>
);

PhotoPlaceholder.defaultProps = PhotoPlaceholderDefaultProps;
