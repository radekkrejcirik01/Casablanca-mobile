export interface SwiperProps {
    data: Array<CardDataProps>;
}

export interface CardDataProps {
    image: string;
    name: string;
    age: string;
    tags: Array<string>;
    color: string;
}
