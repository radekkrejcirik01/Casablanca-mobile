import React from 'react';
import { Text } from 'react-native';
import { ContinueProps } from '@components/registration/Continue/Continue.props';
import { ContinueStyle } from '@components/registration/Continue/Continue.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';

export const Continue = ({ onPress }: ContinueProps): JSX.Element => (
    <TouchableOpacity onPress={onPress} style={ContinueStyle.container}>
        <Text style={ContinueStyle.text}>Continue</Text>
    </TouchableOpacity>
);
