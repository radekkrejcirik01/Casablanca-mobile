import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { GenderSelectStyle } from '@components/registration/GenderSelect/GenderSelect.style';
import COLORS from '@constants/COLORS';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { GenderSelectEnum } from '@components/registration/GenderSelect/GenderSelect.enum';
import { ReducerProps } from '@store/index.props';
import { setGenderAction } from '@store/RegistrationReducer';
import {
    GenderSelectDefaultProps,
    GenderSelectProps
} from '@components/registration/GenderSelect/GenderSelect.props';

export const GenderSelect = ({ style }: GenderSelectProps): JSX.Element => {
    const gender = useSelector(
        (state: ReducerProps) => state.registration.gender
    );

    const dispatch = useDispatch();

    const femalePress = () => {
        dispatch(setGenderAction(GenderSelectEnum.WOMAN));
    };

    const malePress = () => {
        dispatch(setGenderAction(GenderSelectEnum.MAN));
    };

    return (
        <View style={[GenderSelectStyle.container, style]}>
            <TouchableOpacity
                onPress={femalePress}
                style={GenderSelectStyle.row}
            >
                <Text style={GenderSelectStyle.text}>Woman</Text>
                <CheckBox
                    disabled={false}
                    tintColor={COLORS.WHITE}
                    onTintColor={COLORS.WHITE}
                    onCheckColor={COLORS.WHITE}
                    value={gender === GenderSelectEnum.WOMAN}
                    style={GenderSelectStyle.checkBox}
                    onAnimationType="one-stroke"
                    offAnimationType="fade"
                    lineWidth={1.85}
                    animationDuration={0.4}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={malePress} style={GenderSelectStyle.row}>
                <Text style={GenderSelectStyle.text}>Man</Text>
                <CheckBox
                    disabled={false}
                    tintColor={COLORS.WHITE}
                    onTintColor={COLORS.WHITE}
                    onCheckColor={COLORS.WHITE}
                    value={gender === GenderSelectEnum.MAN}
                    style={GenderSelectStyle.checkBox}
                    onAnimationType="one-stroke"
                    offAnimationType="fade"
                    lineWidth={1.85}
                    animationDuration={0.4}
                />
            </TouchableOpacity>
        </View>
    );
};

GenderSelect.defaultProps = GenderSelectDefaultProps;
