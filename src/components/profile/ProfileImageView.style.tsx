import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ProfileImageViewStyle = StyleSheet.create({
    animatedImage: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: COLORS.LIGHTGRAY
    },
    animatedImageOpacity: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
        opacity: 0.15
    }
});
