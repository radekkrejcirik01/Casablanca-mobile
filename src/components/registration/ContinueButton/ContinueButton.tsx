import React from 'react';
import { Text } from 'react-native';
import {
    ContinueDefaultProps,
    ContinueButtonProps
} from '@components/registration/ContinueButton/ContinueButton.props';
import { ContinueButtonStyle } from '@components/registration/ContinueButton/ContinueButton.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';

export const ContinueButton = ({
    onPress,
    style
}: ContinueButtonProps): JSX.Element => (
    <TouchableOpacity
        onPress={onPress}
        style={[ContinueButtonStyle.container, style]}
    >
        <Text style={ContinueButtonStyle.text}>Continue</Text>
    </TouchableOpacity>
);

ContinueButton.defaultProps = ContinueDefaultProps;
