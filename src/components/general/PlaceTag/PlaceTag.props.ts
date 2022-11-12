export interface PlaceTagProps {
    tag: string;
    onSelect: (value: string) => void;
    onTagPress?: () => void;
    isTagged?: boolean;
    showAll?: boolean;
}

export const PlaceTagDefaultProps: Omit<PlaceTagProps, 'tag' | 'onSelect'> = {
    onTagPress: () => {},
    isTagged: false,
    showAll: false
};
