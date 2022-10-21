import { Birthday } from '@store/index.props';
import { StyleProp, ViewStyle } from 'react-native';

export interface BirthdayInputProps {
    birthday: Birthday;
    style?: StyleProp<ViewStyle>;
}

export const BirthdayInputDefaultProps: Omit<BirthdayInputProps, 'birthday'> = {
    style: {}
};
