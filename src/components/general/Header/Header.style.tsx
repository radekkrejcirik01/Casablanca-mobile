import { StyleSheet } from 'react-native';
import Colors from '@constants/Colors';

export const HeaderStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 30,
        height: 30,
        backgroundColor: 'blue'
    },
    text: {
        marginLeft: 5,
        color: Colors.WHITE,
        fontSize: 25,
        fontWeight: 'bold'
    }
});
