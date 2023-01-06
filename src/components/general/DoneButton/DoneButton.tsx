import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import {
    DoneButtonDefaultProps,
    DoneButtonsProps
} from '@components/general/DoneButton/DoneButtons.props';
import { DoneButtonStyle } from '@components/general/DoneButton/DoneButton.style';

export const DoneButton = ({ onPress }: DoneButtonsProps): JSX.Element => (
    <TouchableOpacity onPress={onPress} style={DoneButtonStyle.container}>
        <Text style={DoneButtonStyle.text}>Done</Text>
    </TouchableOpacity>
);

DoneButton.defaultProps = DoneButtonDefaultProps;
