import { StyleProp, ViewStyle } from 'react-native';

export interface PlaceTagsProps {
    onSelect?: (value: string) => void;
    showAll: boolean;
    style?: StyleProp<ViewStyle>;
    tags: Array<string>;
}

export const PlaceTagsDefaultProps: Omit<PlaceTagsProps, 'tags'> = {
    onSelect: () => {},
    showAll: false,
    style: {}
};
