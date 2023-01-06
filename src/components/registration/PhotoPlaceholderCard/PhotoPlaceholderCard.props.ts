import { StyleProp, ViewStyle } from 'react-native';

export interface PhotoPlaceholderCardProps {
    onPress: (photo: string) => void;
    onRemove?: (photo: string) => void;
    photo: string;
    removable?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const PhotoPlaceholderCardDefaultProps: Omit<
    PhotoPlaceholderCardProps,
    'onPress' | 'photo'
> = {
    onRemove: (photo: string) => {},
    removable: true,
    style: {}
};
