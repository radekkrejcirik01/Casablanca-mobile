import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { GenderSelectStyle } from '@components/registration/GenderSelect/GenderSelect.style';
import COLORS from '@constants/COLORS';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { WhoShowSelectEnum } from '@components/registration/WhoShowSelect/WhoShowSelect.enum';
import { setWhoShowAction } from '@store/RegistrationReducer';
import { ReducerProps } from '@store/index.props';

export const WhoShowSelect = (): JSX.Element => {
    const gender = useSelector(
        (state: ReducerProps) => state.registration.whoShow
    );

    const dispatch = useDispatch();

    const womenPress = () => {
        dispatch(setWhoShowAction(WhoShowSelectEnum.WOMEN));
    };

    const menPress = () => {
        dispatch(setWhoShowAction(WhoShowSelectEnum.MEN));
    };

    const allPress = () => {
        dispatch(setWhoShowAction(WhoShowSelectEnum.ALL));
    };

    return (
        <View style={GenderSelectStyle.container}>
            <TouchableOpacity
                onPress={womenPress}
                style={GenderSelectStyle.row}
            >
                <Text style={GenderSelectStyle.text}>Women</Text>
                <CheckBox
                    disabled={false}
                    tintColor={COLORS.WHITE}
                    onTintColor={COLORS.WHITE}
                    onCheckColor={COLORS.WHITE}
                    value={gender === WhoShowSelectEnum.WOMEN}
                    style={GenderSelectStyle.checkBox}
                    onAnimationType="one-stroke"
                    offAnimationType="fade"
                    lineWidth={1.85}
                    animationDuration={0.4}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={menPress} style={GenderSelectStyle.row}>
                <Text style={GenderSelectStyle.text}>Men</Text>
                <CheckBox
                    disabled={false}
                    tintColor={COLORS.WHITE}
                    onTintColor={COLORS.WHITE}
                    onCheckColor={COLORS.WHITE}
                    value={gender === WhoShowSelectEnum.MEN}
                    style={GenderSelectStyle.checkBox}
                    onAnimationType="one-stroke"
                    offAnimationType="fade"
                    lineWidth={1.85}
                    animationDuration={0.4}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={allPress} style={GenderSelectStyle.row}>
                <Text style={GenderSelectStyle.text}>All</Text>
                <CheckBox
                    disabled={false}
                    tintColor={COLORS.WHITE}
                    onTintColor={COLORS.WHITE}
                    onCheckColor={COLORS.WHITE}
                    value={gender === WhoShowSelectEnum.ALL}
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
