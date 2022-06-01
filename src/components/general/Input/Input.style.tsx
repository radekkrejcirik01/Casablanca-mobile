import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';

export const InputStyle = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: Colors.WHITE
    },
    input: {
        flex: 1,
        color: Colors.WHITE,
        fontWeight: '700',
        fontSize: 16
    }
});
