import { StyleProp, ViewStyle } from 'react-native';

export interface PhotoPlaceholderProps {
    onPress: () => void;
    photos: Array<string>;
    style?: StyleProp<ViewStyle>;
}

export const PhotoPlaceholderDefaultProps = {
    style: {}
};
