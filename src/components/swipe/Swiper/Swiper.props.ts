export interface CardDataProps {
    email?: string;
    firstname: string;
    birthday: string;
    about: string;
    photos: Array<string>;
    tags: Array<string>;
    lastActive?: string;
}
