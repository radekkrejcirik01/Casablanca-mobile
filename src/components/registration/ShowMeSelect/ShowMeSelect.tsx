import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import COLORS from '@constants/COLORS';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { ShowMeSelectEnum } from '@components/registration/ShowMeSelect/ShowMeSelect.enum';
import { setShowMeAction } from '@store/RegistrationReducer';
import { ReducerProps } from '@store/index.props';
import { ShowMeSelectStyle } from '@components/registration/ShowMeSelect/ShowMeSelect.style';
import {
    ShowMeSelectDefaultProps,
    ShowMeSelectProps
} from '@components/registration/ShowMeSelect/ShowMeSelect.props';

export const ShowMeSelect = ({ style }: ShowMeSelectProps): JSX.Element => {
    const gender = useSelector(
        (state: ReducerProps) => state.registration.showMe
    );

    const dispatch = useDispatch();

    const womenPress = () => {
        dispatch(setShowMeAction(ShowMeSelectEnum.WOMEN));
    };

    const menPress = () => {
        dispatch(setShowMeAction(ShowMeSelectEnum.MEN));
    };

    const allPress = () => {
        dispatch(setShowMeAction(ShowMeSelectEnum.ALL));
    };

    return (
        <View style={[ShowMeSelectStyle.container, style]}>
            <TouchableOpacity
                onPress={womenPress}
                style={ShowMeSelectStyle.row}
            >
                <Text style={ShowMeSelectStyle.text}>Women</Text>
                <CheckBox
                    disabled={false}
                    tintColor={COLORS.WHITE}
                    onTintColor={COLORS.WHITE}
                    onCheckColor={COLORS.WHITE}
                    value={gender === ShowMeSelectEnum.WOMEN}
                    style={ShowMeSelectStyle.checkBox}
                    onAnimationType="one-stroke"
                    offAnimationType="fade"
                    lineWidth={1.85}
                    animationDuration={0.4}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={menPress} style={ShowMeSelectStyle.row}>
                <Text style={ShowMeSelectStyle.text}>Men</Text>
                <CheckBox
                    disabled={false}
                    tintColor={COLORS.WHITE}
                    onTintColor={COLORS.WHITE}
                    onCheckColor={COLORS.WHITE}
                    value={gender === ShowMeSelectEnum.MEN}
                    style={ShowMeSelectStyle.checkBox}
                    onAnimationType="one-stroke"
                    offAnimationType="fade"
                    lineWidth={1.85}
                    animationDuration={0.4}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={allPress} style={ShowMeSelectStyle.row}>
                <Text style={ShowMeSelectStyle.text}>All</Text>
                <CheckBox
                    disabled={false}
                    tintColor={COLORS.WHITE}
                    onTintColor={COLORS.WHITE}
                    onCheckColor={COLORS.WHITE}
                    value={gender === ShowMeSelectEnum.ALL}
                    style={ShowMeSelectStyle.checkBox}
                    onAnimationType="one-stroke"
                    offAnimationType="fade"
                    lineWidth={1.85}
                    animationDuration={0.4}
                />
            </TouchableOpacity>
        </View>
    );
};

ShowMeSelect.defaultProps = ShowMeSelectDefaultProps;
