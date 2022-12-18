export interface SwiperProps {
    data: Array<CardDataProps>;
}

export interface CardDataProps {
    email?: string;
    firstname: string;
    birthday: string;
    about: string;
    photos: Array<string>;
    tags: Array<string>;
    lastActive: string;
}
