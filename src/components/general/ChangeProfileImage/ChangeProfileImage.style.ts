import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChangeProfileImageStyle = StyleSheet.create({
    container: {
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 50,
        alignSelf: 'center'
    },
    text: {
        marginTop: 5,
        fontSize: 12,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
