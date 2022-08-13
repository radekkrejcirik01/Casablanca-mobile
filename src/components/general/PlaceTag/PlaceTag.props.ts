export interface PlaceTagProps {
    tag: string;
    onSelect: (value: string) => void;
    isTagged?: boolean;
    showAll?: boolean;
}

export const PlaceTagDefaultProps: Omit<PlaceTagProps, 'tag' | 'onSelect'> = {
    isTagged: false,
    showAll: false
};
