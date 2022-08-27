import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ProfileScreenStyle = StyleSheet.create({
    bottomContainer: {
        height: '100%',
        paddingTop: 20,
        borderRadius: 25
    },
    view: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    firstname: {
        fontSize: 30,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    },
    age: {
        marginTop: 10,
        fontSize: 20,
        color: COLORS.WHITE,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    tagsView: {
        marginTop: 20
    }
});
