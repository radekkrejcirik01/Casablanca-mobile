import { StyleProp, ViewStyle } from 'react-native';

export interface PlaceTagsProps {
    tags: Array<string>;
    showAll: boolean;
    style?: StyleProp<ViewStyle>;
}

export const PlaceTagsDefaultProps: Omit<PlaceTagsProps, 'tags'> = {
    showAll: false,
    style: {}
};
