import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const PlaceTagStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 10,
        margin: 5,
        borderWidth: 2.5,
        borderRadius: 20,
        backgroundColor: COLORS.MAIN_BLUE,
        borderColor: COLORS.WHITE
    },
    emoji: {
        paddingRight: 3
    },
    text: {
        paddingHorizontal: 2,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
