import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const PlaceTagStyle = StyleSheet.create({
    container: {
        margin: 5,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 20,
        borderWidth: 2.25,
        borderColor: COLORS.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
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
