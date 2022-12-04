import { StyleSheet } from 'react-native';
import COLORS from '@constants/COLORS';

export const AgePreferenceIndicatorStyle = StyleSheet.create({
    textContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textContainerLeft: {
        flex: 1,
        textAlign: 'right'
    },
    textContainerRight: {
        flex: 1
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    text: {
        fontSize: 55,
        color: COLORS.WHITE
    },
    pointContainer: {
        marginTop: 125,
        flexDirection: 'row'
    }
});
