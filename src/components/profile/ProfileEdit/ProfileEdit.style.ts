import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ProfileEditStyle = StyleSheet.create({
    header: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        marginTop: 20,
        marginBottom: 25,
        fontSize: 15,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
