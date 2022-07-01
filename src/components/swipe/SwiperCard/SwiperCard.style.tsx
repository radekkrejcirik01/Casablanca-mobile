import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SwiperCardStyle = StyleSheet.create({
    view: {
        backgroundColor: COLORS.GRAY_300
    },
    image: {
        width: '100%',
        height: '100%',
        paddingTop: 10,
        paddingRight: 5
    },
    lottieView: {
        width: 90,
        height: 90,
        alignSelf: 'flex-end'
    }
});
