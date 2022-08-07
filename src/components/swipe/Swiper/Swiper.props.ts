export interface SwiperProps {
    data: Array<CardDataProps>;
}

export interface CardDataProps {
    images: Array<string>;
    name: string;
    age: string;
    tags: Array<string>;
    color: string;
}
