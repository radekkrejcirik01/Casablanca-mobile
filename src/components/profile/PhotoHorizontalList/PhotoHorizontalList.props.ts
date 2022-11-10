import { StyleProp, ViewStyle } from 'react-native';

export interface PhotoHorizontalListProps {
    onPress: (photo: string) => void;
    photos: Array<string>;
    photosNumber: number;
    style?: StyleProp<ViewStyle>;
}

export const PhotoHorizontalListDefaultProps: Omit<
    PhotoHorizontalListProps,
    'onPress' | 'photos' | 'photosNumber'
> = {
    style: {}
};
