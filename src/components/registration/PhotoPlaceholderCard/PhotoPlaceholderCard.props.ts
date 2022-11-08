import { StyleProp, ViewStyle } from 'react-native';

export interface PhotoPlaceholderCardProps {
    onPress: (photo: string) => void;
    onRemove: (photo: string) => void;
    photo: string;
    style?: StyleProp<ViewStyle>;
}

export const PhotoPlaceholderCardDefaultProps: Omit<
    PhotoPlaceholderCardProps,
    'onPress' | 'onRemove' | 'photo'
> = {
    style: {}
};
