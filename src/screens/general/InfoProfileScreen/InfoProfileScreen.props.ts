import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export interface InfoProfileScreenProps {
    onClose: () => void;
    info?: CardDataProps;
}

export const InfoProfileScreenDefaultProps: Omit<
    InfoProfileScreenProps,
    'onClose'
> = {
    info: {
        images: [],
        name: null,
        age: null,
        tags: []
    }
};
