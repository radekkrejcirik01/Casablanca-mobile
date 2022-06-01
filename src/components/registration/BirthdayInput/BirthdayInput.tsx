import React, { createRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Input } from '@components/general/Input/Input';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { BirthdayInputStyle } from '@components/registration/BirthdayInput/BirthdayInput.style';
import { BirthdayInputProps } from '@components/registration/BirthdayInput/BirthdayInput.props';
import { useDispatch } from 'react-redux';
import {
    setBirthdayDayAction,
    setBirthdayMonthAction,
    setBirthdayYearAction
} from '@store/RegistrationReducer';

export const BirthdayInput = ({
    birthday
}: BirthdayInputProps): JSX.Element => {
    const dispatch = useDispatch();

    const inputYear = createRef<TextInput>();
    const inputMonth = createRef<TextInput>();
    const inputDay = createRef<TextInput>();

    return (
        <View style={BirthdayInputStyle.container}>
            <Input
                value={birthday.year}
                onChange={(value: string) => {
                    dispatch(setBirthdayYearAction(value));
                    if (value.length === 4 && !birthday.month) {
                        inputMonth.current?.focus();
                    }
                }}
                onKeyPress={(e) => {
                    if (
                        birthday.year?.length === 4 &&
                        !birthday.month &&
                        e.nativeEvent.key !== 'Backspace'
                    ) {
                        dispatch(setBirthdayYearAction(e.nativeEvent.key));
                        inputMonth.current?.focus();
                    }
                }}
                ref={inputYear}
                autoFocus={birthday.year?.length !== 4}
                inputType={InputTypeEnum.TEXT}
                viewStyle={BirthdayInputStyle.inputView}
                inputStyle={BirthdayInputStyle.input}
                autoCorrect={false}
                autoCompleteType="off"
                keyboardAppearance="light"
                maxLength={4}
                keyboardType="number-pad"
                placeholder="YYYY"
            />
            <Text style={BirthdayInputStyle.slash}>/</Text>
            <Input
                value={birthday.month}
                onChange={(value: string) => {
                    dispatch(setBirthdayMonthAction(value));
                    if (value.length === 2 && !birthday.day) {
                        inputDay.current?.focus();
                    }
                }}
                onKeyPress={(e) => {
                    if (!birthday.month && e.nativeEvent.key === 'Backspace') {
                        inputYear.current?.focus();
                    }
                    if (
                        birthday.month?.length === 2 &&
                        !birthday.day &&
                        e.nativeEvent.key !== 'Backspace'
                    ) {
                        dispatch(setBirthdayDayAction(e.nativeEvent.key));
                        inputDay.current?.focus();
                    }
                }}
                ref={inputMonth}
                autoFocus={
                    birthday.year?.length === 4 && birthday.month?.length !== 2
                }
                inputType={InputTypeEnum.TEXT}
                viewStyle={BirthdayInputStyle.inputView}
                inputStyle={BirthdayInputStyle.input}
                autoCorrect={false}
                autoCompleteType="off"
                keyboardAppearance="light"
                maxLength={2}
                keyboardType="number-pad"
                placeholder="MM"
            />
            <Text style={BirthdayInputStyle.slash}>/</Text>
            <Input
                value={birthday.day}
                onChange={(value: string) => {
                    dispatch(setBirthdayDayAction(value));
                }}
                onKeyPress={(e) => {
                    if (!birthday.day && e.nativeEvent.key === 'Backspace') {
                        inputMonth.current?.focus();
                    }
                }}
                ref={inputDay}
                autoFocus={
                    birthday.year?.length === 4 && birthday.month?.length === 2
                }
                inputType={InputTypeEnum.TEXT}
                viewStyle={BirthdayInputStyle.inputView}
                inputStyle={BirthdayInputStyle.input}
                autoCorrect={false}
                autoCompleteType="off"
                keyboardAppearance="light"
                maxLength={2}
                keyboardType="number-pad"
                placeholder="DD"
            />
        </View>
    );
};
