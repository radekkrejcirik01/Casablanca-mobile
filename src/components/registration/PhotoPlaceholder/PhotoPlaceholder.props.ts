import { StyleProp, ViewStyle } from 'react-native';

export interface PhotoPlaceholderProps {
    onPress: (photo: string) => void;
    onRemove: (photo: string) => void;
    photos: Array<string>;
    photosNumber: number;
    style?: StyleProp<ViewStyle>;
}

export const PhotoPlaceholderDefaultProps: Omit<
    PhotoPlaceholderProps,
    'onPress' | 'onRemove' | 'photos' | 'photosNumber'
> = {
    style: {}
};
