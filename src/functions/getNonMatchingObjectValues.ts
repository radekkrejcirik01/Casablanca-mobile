import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';

export const getNonMatchingObjectValues = (
    object1: Array<CardDataProps>,
    object2: Array<CardDataProps>
): Array<CardDataProps> => {
    const filtered: Array<CardDataProps> = [];

    if (object2?.length) {
        object2.map((object2Value: CardDataProps) => {
            const objectExist = object1.find(
                (object1Value: CardDataProps) =>
                    object2Value.email === object1Value.email
            );
            if (!objectExist) {
                filtered.push(object2Value);
            }
            return null;
        });

        return filtered;
    }
    return object1;
};
