import React from 'react';
import { ScrollView } from 'react-native';
import { PhotoPlaceholderCard } from '@components/registration/PhotoPlaceholderCard/PhotoPlaceholderCard';
import { PhotoHorizontalListStyle } from '@components/edit/PhotoHorizontalList/PhotoHorizontalList.style';
import { PhotoHorizontalListProps } from '@components/edit/PhotoHorizontalList/PhotoHorizontalList.props';

export const PhotoHorizontalList = ({
    onPress,
    onRemove,
    photos,
    photosNumber
}: PhotoHorizontalListProps): JSX.Element => (
    <ScrollView horizontal style={PhotoHorizontalListStyle.container}>
        {[...Array(photosNumber).keys()].map((value: number) => (
            <PhotoPlaceholderCard
                key={value}
                onPress={onPress}
                onRemove={onRemove}
                photo={photos[value]}
                style={PhotoHorizontalListStyle.photoPlaceholderCard}
            />
        ))}
    </ScrollView>
);
