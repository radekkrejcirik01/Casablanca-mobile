import React from 'react';
import { View } from 'react-native';
import { PhotoPlaceholderStyle } from '@components/registration/PhotoPlaceholder/PhotoPlaceholder.style';
import { PhotoPlaceholderCard } from '@components/registration/PhotoPlaceholderCard/PhotoPlaceholderCard';
import { useSelector } from 'react-redux';
import { ReducerProps } from '@store/index.props';

export const PhotoPlaceholder = (): JSX.Element => {
    const photos = useSelector(
        (state: ReducerProps) => state.registration.photos
    );
    return (
        <View>
            <View style={PhotoPlaceholderStyle.containerCard}>
                <PhotoPlaceholderCard photo={photos[0]} />
                <PhotoPlaceholderCard photo={photos[1]} />
            </View>
            <View style={PhotoPlaceholderStyle.containerCard}>
                <PhotoPlaceholderCard photo={photos[2]} />
                <PhotoPlaceholderCard photo={photos[3]} />
            </View>
        </View>
    );
};
