import { Ref } from 'react';
import {
    NativeSyntheticEvent,
    StyleProp,
    TextInput,
    TextInputKeyPressEventData,
    ViewStyle
} from 'react-native';
import { Birthday } from '@store/index.props';

export interface BirthdayInputProps {
    birthday: Birthday;
    style?: StyleProp<ViewStyle>;
}

export const BirthdayInputDefaultProps: Omit<BirthdayInputProps, 'birthday'> = {
    style: {}
};

export interface ValueInputProps {
    value: string;
    onChange: (value: string) => void;
    onKeyPress: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
    innerRef: Ref<TextInput>;
    autoFocus: boolean;
    placeholder: string;
}
