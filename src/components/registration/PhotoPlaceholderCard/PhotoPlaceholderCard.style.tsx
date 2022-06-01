import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const PhotoPlaceholderCardStyle = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    closeTouchableOpacity: {
        zIndex: 1,
        alignItems: 'flex-end'
    },
    closeView: {
        position: 'absolute',
        width: 24,
        height: 24,
        borderRadius: 20,
        backgroundColor: COLORS.MAIN_BLUE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    photo: {
        flexBasis: 160,
        borderRadius: 20,
        backgroundColor: COLORS.LIGHTGRAY
    }
});
