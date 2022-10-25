import { StyleProp, ViewStyle } from 'react-native';

export interface ContinueButtonProps {
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

export const ContinueDefaultProps: Omit<ContinueButtonProps, 'onPress'> = {
    style: {}
};
