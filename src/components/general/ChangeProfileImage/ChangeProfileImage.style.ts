import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const ChangeProfileImageStyle = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center'
    },
    text: {
        fontSize: 12,
        color: COLORS.WHITE,
        fontWeight: 'bold'
    }
});
