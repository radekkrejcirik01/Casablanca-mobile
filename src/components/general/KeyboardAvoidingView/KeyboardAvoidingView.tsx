import React from 'react';
import {
    KeyboardAvoidingView as KeyboardAvoidingViewDefault,
    Platform
} from 'react-native';
import {
    KeyboardAvoidingViewDefaultProps,
    KeyboardAvoidingViewProps
} from '@components/general/KeyboardAvoidingView/KeyboardAvoidingView.props';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const KeyboardAvoidingView = ({
    keyboardVerticalOffset,
    ...props
}: KeyboardAvoidingViewProps): JSX.Element => {
    const { top } = useSafeAreaInsets();
    return (
        <KeyboardAvoidingViewDefault
            behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
            keyboardVerticalOffset={keyboardVerticalOffset + top}
            {...props}
        />
    );
};

KeyboardAvoidingView.defaultProps = KeyboardAvoidingViewDefaultProps;
