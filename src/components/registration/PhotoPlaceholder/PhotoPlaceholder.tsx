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
    photos,
    style
}: PhotoPlaceholderProps): JSX.Element => (
    <View style={style}>
        <View style={PhotoPlaceholderStyle.containerCard}>
            <PhotoPlaceholderCard onPress={onPress} photo={photos[0]} />
            <PhotoPlaceholderCard onPress={onPress} photo={photos[1]} />
        </View>
        <View style={PhotoPlaceholderStyle.containerCard}>
            <PhotoPlaceholderCard onPress={onPress} photo={photos[2]} />
            <PhotoPlaceholderCard onPress={onPress} photo={photos[3]} />
        </View>
    </View>
);

PhotoPlaceholder.defaultProps = PhotoPlaceholderDefaultProps;
