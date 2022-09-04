import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SwiperCardStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.GRAY_300,
        overflow: 'hidden'
    },
    viewPager: {
        flex: 1
    },
    lottie: {
        width: 90,
        height: 90,
        position: 'absolute',
        alignSelf: 'flex-end'
    },
    dotProgressBar: {
        bottom: 15,
        position: 'absolute',
        alignSelf: 'center'
    }
});
