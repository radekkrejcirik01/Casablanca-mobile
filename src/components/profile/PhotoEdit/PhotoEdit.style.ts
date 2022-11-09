import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const PhotoEditStyle = StyleSheet.create({
    header: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    view: {
        backgroundColor: COLORS.BLACK
    },
    photoPlaceholder: {
        flex: 1,
        alignContent: 'center'
    }
});
