export interface PhotoHorizontalListProps {
    onPress: (photo: string) => void;
    photos: Array<string>;
    photosNumber: number;
}
