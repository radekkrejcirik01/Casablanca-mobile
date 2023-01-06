import { Ref } from 'react';
import {
    NativeSyntheticEvent,
    StyleProp,
    TextInput,
    TextInputKeyPressEventData,
    ViewStyle
} from 'react-native';

export interface BirthdayInputProps {
    birthday: Birthday;
    style?: StyleProp<ViewStyle>;
}

interface Birthday {
    year: string;
    month: string;
    day: string;
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
    maxLength: number;
}
