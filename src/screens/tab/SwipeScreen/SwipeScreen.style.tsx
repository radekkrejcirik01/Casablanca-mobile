import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const SwiperScreenStyle = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.MAIN_BLUE
    },
    view: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: 20
    }
});
