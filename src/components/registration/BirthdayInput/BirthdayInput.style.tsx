import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const BirthdayInputStyle = StyleSheet.create({
    container: {
        width: 250,
        height: 50,
        paddingHorizontal: 15,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: COLORS.WHITE,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputView: {
        height: 40,
        borderWidth: 0,
        flexDirection: 'column'
    },
    input: {
        width: 55,
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
    },
    slash: {
        paddingBottom: 5,
        fontSize: 24,
        color: COLORS.WHITE,
        fontWeight: '400'
    }
});
