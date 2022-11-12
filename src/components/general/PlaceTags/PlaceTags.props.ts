import { StyleProp, ViewStyle } from 'react-native';

export interface PlaceTagsProps {
    tags: Array<string>;
    onSelect?: (value: string) => void;
    onTagPress?: () => void;
    showAll?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const PlaceTagsDefaultProps: Omit<PlaceTagsProps, 'tags'> = {
    onSelect: () => {},
    onTagPress: () => {},
    showAll: false,
    style: {}
};
