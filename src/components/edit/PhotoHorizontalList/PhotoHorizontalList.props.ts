export interface PhotoHorizontalListProps {
    onPress: () => void;
    onRemove: (photo: string) => void;
    photos: Array<string>;
    photosNumber: number;
}
