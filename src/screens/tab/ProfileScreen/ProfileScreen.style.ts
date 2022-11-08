import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ProfileScreenStyle = StyleSheet.create({
    themeView: {
        height: '100%',
        paddingTop: 20,
        borderRadius: 25
    },
    firstname: {
        fontSize: 30,
        color: COLORS.WHITE,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    age: {
        marginTop: 10,
        fontSize: 20,
        color: COLORS.WHITE,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    tagsView: {
        height: 150,
        marginTop: 20
    },
    underScroll: {
        marginTop: 100,
        paddingHorizontal: 15
    }
});
