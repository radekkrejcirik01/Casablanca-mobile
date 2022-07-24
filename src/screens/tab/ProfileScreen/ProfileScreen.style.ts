import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ProfileScreenStyle = StyleSheet.create({
    bottomContainer: {
        height: '100%',
        paddingTop: 20,
        backgroundColor: COLORS.MAIN_BLUE,
        borderRadius: 30
    },
    firstname: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    age: {
        marginTop: 10,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    tagsView: {
        marginTop: 20
    }
});
