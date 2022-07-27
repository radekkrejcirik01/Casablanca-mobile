import React from 'react';
import {
    KeyboardAvoidingView as KeyboardAvoidingViewDefault,
    Platform
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
    KeyboardAvoidingViewDefaultProps,
    KeyboardAvoidingViewProps
} from '@components/general/KeyboardAvoidingView/KeyboardAvoidingView.props';

export const KeyboardAvoidingView = ({
    keyboardVerticalOffset,
    ...props
}: KeyboardAvoidingViewProps): JSX.Element => {
    const { top } = useSafeAreaInsets();
    return (
        <KeyboardAvoidingViewDefault
            behavior={Platform.OS === 'ios' ? 'position' : 'padding'}
            keyboardVerticalOffset={
                keyboardVerticalOffset && keyboardVerticalOffset + top
            }
            {...props}
        />
    );
};

KeyboardAvoidingView.defaultProps = KeyboardAvoidingViewDefaultProps;
