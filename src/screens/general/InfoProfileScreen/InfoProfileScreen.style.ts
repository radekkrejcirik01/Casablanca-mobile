import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const InfoProfileScreenStyle = StyleSheet.create({
    safeArea: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: COLORS.WHITE
    },
    buttonIconView: {
        marginTop: 15,
        marginRight: 20,
        padding: 2,
        borderRadius: 20,
        backgroundColor: COLORS.LIGHTGRAY,
        alignSelf: 'flex-end'
    }
});
