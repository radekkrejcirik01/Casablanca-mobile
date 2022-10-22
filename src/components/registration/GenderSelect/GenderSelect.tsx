import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { GenderSelectStyle } from '@components/registration/GenderSelect/GenderSelect.style';
import COLORS from '@constants/COLORS';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { GenderSelectEnum } from '@components/registration/GenderSelect/GenderSelect.enum';
import {
    GenderSelectDefaultProps,
    GenderSelectProps,
    SelectBoxProps
} from '@components/registration/GenderSelect/GenderSelect.props';

export const GenderSelect = ({
    gender,
    onSelect,
    style
}: GenderSelectProps): JSX.Element => {
    const SelectBox = useCallback(
        ({ title, value }: SelectBoxProps): JSX.Element => (
            <TouchableOpacity
                onPressIn={() => onSelect(title)}
                style={GenderSelectStyle.row}
            >
                <Text style={GenderSelectStyle.text}>{title}</Text>
                <CheckBox
                    disabled={false}
                    tintColor={COLORS.WHITE}
                    onTintColor={COLORS.WHITE}
                    onCheckColor={COLORS.WHITE}
                    value={value}
                    onAnimationType="one-stroke"
                    offAnimationType="fade"
                    lineWidth={1.85}
                    animationDuration={0.4}
                    style={GenderSelectStyle.checkBox}
                />
            </TouchableOpacity>
        ),
        [onSelect]
    );

    return (
        <View style={[GenderSelectStyle.container, style]}>
            <SelectBox
                title={GenderSelectEnum.WOMAN}
                value={gender === GenderSelectEnum.WOMAN}
            />
            <SelectBox
                title={GenderSelectEnum.MAN}
                value={gender === GenderSelectEnum.MAN}
            />
        </View>
    );
};

GenderSelect.defaultProps = GenderSelectDefaultProps;
