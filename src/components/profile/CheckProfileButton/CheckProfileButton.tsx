import React from 'react';
import { Text } from 'react-native';
import { CheckProfileButtonStyle } from '@components/profile/CheckProfileButton/CheckProfileButton.style';
import {
    CheckProfileButtonDefaultProps,
    CheckProfileButtonProps
} from '@components/profile/CheckProfileButton/CheckProfileButton.props';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';

export const CheckProfileButton = ({
    onPress,
    style
}: CheckProfileButtonProps): JSX.Element => (
    <TouchableOpacity
        onPress={onPress}
        style={[CheckProfileButtonStyle.view, style]}
    >
        <Text style={CheckProfileButtonStyle.text}>See profile</Text>
    </TouchableOpacity>
);

CheckProfileButton.defaultProps = CheckProfileButtonDefaultProps;
