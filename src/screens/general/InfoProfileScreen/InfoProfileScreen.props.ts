export interface InfoProfileScreenProps {
    onClose: () => void;
    info?: InfoProps;
}

export const InfoProfileScreenDefaultProps: Omit<
    InfoProfileScreenProps,
    'onClose'
> = {
    info: {
        images: null,
        name: null,
        age: null
    }
};

export interface InfoProps {
    images: Array<string>;
    name: string;
    age: string;
}
