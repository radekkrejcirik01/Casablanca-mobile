import { StyleProp, ViewStyle } from 'react-native';

export interface CheckProfileButtonProps {
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

export const CheckProfileButtonDefaultProps: Omit<
    CheckProfileButtonProps,
    'onPress'
> = {
    style: {}
};
