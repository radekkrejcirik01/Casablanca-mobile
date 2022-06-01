import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';

export const BirthdayInputStyle = StyleSheet.create({
    container: {
        width: 250,
        height: 50,
        borderColor: Colors.WHITE,
        borderWidth: 2,
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    inputView: {
        flexDirection: 'column',
        height: 40,
        borderWidth: 0
    },
    input: {
        width: 55,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },
    slash: {
        fontSize: 24,
        fontWeight: '400',
        color: Colors.WHITE,
        paddingBottom: 5
    }
});
