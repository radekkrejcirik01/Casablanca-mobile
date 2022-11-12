import React from 'react';
import { Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import COLORS from '@constants/COLORS';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import {
    SelectBoxDefaultProps,
    SelectBoxProps
} from '@components/registration/SelectBox/SelectBox.props';
import { SelectBoxStyle } from '@components/registration/SelectBox/SelectBox.style';

export const SelectBox = ({
    onPressIn,
    value,
    title,
    style
}: SelectBoxProps): JSX.Element => (
    <TouchableOpacity
        onPressIn={onPressIn}
        style={[SelectBoxStyle.container, style]}
    >
        <Text style={SelectBoxStyle.text}>{title}</Text>
        <CheckBox
            disabled
            tintColor={COLORS.WHITE}
            onTintColor={COLORS.WHITE}
            onCheckColor={COLORS.WHITE}
            value={value}
            onAnimationType="one-stroke"
            offAnimationType="fade"
            lineWidth={1.85}
            animationDuration={0.4}
            style={SelectBoxStyle.checkBox}
        />
    </TouchableOpacity>
);

SelectBox.defaultProps = SelectBoxDefaultProps;
