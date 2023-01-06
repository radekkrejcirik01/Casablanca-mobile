import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { PhotoPlaceholderCard } from '@components/registration/PhotoPlaceholderCard/PhotoPlaceholderCard';
import { PhotoHorizontalListStyle } from '@components/profile/PhotoHorizontalList/PhotoHorizontalList.style';
import {
    PhotoHorizontalListDefaultProps,
    PhotoHorizontalListProps
} from '@components/profile/PhotoHorizontalList/PhotoHorizontalList.props';

export const PhotoHorizontalList = ({
    onPress,
    photos,
    photosNumber,
    style
}: PhotoHorizontalListProps): JSX.Element => {
    const photo = useCallback(
        (value: number): string => photos[value] || null,
        [photos]
    );

    return (
        <ScrollView
            horizontal
            style={[PhotoHorizontalListStyle.container, style]}
            showsHorizontalScrollIndicator={false}
        >
            {[...Array(photosNumber).keys()].map((value: number) => (
                <PhotoPlaceholderCard
                    key={value}
                    onPress={onPress}
                    photo={photo(value)}
                    removable={false}
                    style={PhotoHorizontalListStyle.photoPlaceholderCard}
                />
            ))}
        </ScrollView>
    );
};

PhotoHorizontalList.defaultProps = PhotoHorizontalListDefaultProps;
