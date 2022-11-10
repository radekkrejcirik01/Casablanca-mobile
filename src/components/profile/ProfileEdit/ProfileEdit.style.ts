import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ProfileEditStyle = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    photoHorizontalList: {
        marginTop: 20
    },
    text: {
        marginTop: 20,
        marginBottom: 25,
        fontSize: 15,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
