export interface PhotoHorizontalListProps {
    onPress: (photo: string) => void;
    onRemove: (photo: string) => void;
    photos: Array<string>;
    photosNumber: number;
}
