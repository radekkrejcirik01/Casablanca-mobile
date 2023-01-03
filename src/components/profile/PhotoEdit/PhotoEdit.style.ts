import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const PhotoEditStyle = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.BLACK
    },
    header: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    photoPlaceholder: {
        flex: 1,
        alignContent: 'center'
    }
});
