import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const PhotoPlaceholderCardStyle = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    closeTouchableOpacity: {
        bottom: -6,
        right: -6,
        position: 'absolute'
    },
    closeIcon: {
        width: 25,
        height: 25,
        padding: 4,
        borderRadius: 20,
        backgroundColor: COLORS.MAIN_BLUE
    },
    photo: {
        flexBasis: 160,
        borderRadius: 20,
        backgroundColor: COLORS.LIGHTGRAY
    }
});
