import React, { createRef, useCallback, useMemo } from 'react';
import {
    NativeSyntheticEvent,
    Text,
    TextInput,
    TextInputKeyPressEventData,
    View
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Input } from '@components/general/Input/Input';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { BirthdayInputStyle } from '@components/registration/BirthdayInput/BirthdayInput.style';
import {
    BirthdayInputDefaultProps,
    BirthdayInputProps,
    ValueInputProps
} from '@components/registration/BirthdayInput/BirthdayInput.props';
import {
    setBirthdayDayAction,
    setBirthdayMonthAction,
    setBirthdayYearAction
} from '@store/RegistrationReducer';

export const BirthdayInput = ({
    birthday,
    style
}: BirthdayInputProps): JSX.Element => {
    const dispatch = useDispatch();

    const inputYear = createRef<TextInput>();
    const inputMonth = createRef<TextInput>();
    const inputDay = createRef<TextInput>();

    const onYearChange = useCallback(
        (value: string) => {
            dispatch(setBirthdayYearAction(value));
            if (value.length === 4 && !birthday.month) {
                inputMonth.current?.focus();
            }
        },
        [birthday.month, dispatch, inputMonth]
    );

    const onYearKeyPress = useCallback(
        (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
            if (
                birthday.year?.length === 4 &&
                !birthday.month &&
                e.nativeEvent.key !== 'Backspace'
            ) {
                dispatch(setBirthdayYearAction(e.nativeEvent.key));
                inputMonth.current?.focus();
            }
        },
        [birthday.month, birthday.year?.length, dispatch, inputMonth]
    );

    const yearAutoFocus = useMemo(
        (): boolean => birthday.year?.length !== 4,
        [birthday.year?.length]
    );

    const onMonthChange = useCallback(
        (value: string) => {
            dispatch(setBirthdayMonthAction(value));
            if (value.length === 2 && !birthday.day) {
                inputDay.current?.focus();
            }
        },
        [birthday.day, dispatch, inputDay]
    );

    const onMonthKeyPress = useCallback(
        (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
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
        },
        [birthday.day, birthday.month, dispatch, inputDay, inputYear]
    );

    const monthAutoFocus = useMemo(
        (): boolean =>
            birthday.year?.length === 4 && birthday.month?.length !== 2,
        [birthday.month?.length, birthday.year?.length]
    );

    const onDayChange = useCallback(
        (value: string) => {
            dispatch(setBirthdayDayAction(value));
        },
        [dispatch]
    );

    const onDayKeyPress = useCallback(
        (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
            if (!birthday.day && e.nativeEvent.key === 'Backspace') {
                inputMonth.current?.focus();
            }
        },
        [birthday.day, inputMonth]
    );

    const dayAutoFocus = useMemo(
        (): boolean =>
            birthday.year?.length === 4 && birthday.month?.length === 2,
        [birthday.month?.length, birthday.year?.length]
    );

    const ValueInput = useCallback(
        ({
            value,
            onChange,
            onKeyPress,
            innerRef,
            autoFocus,
            placeholder
        }: ValueInputProps): JSX.Element => (
            <Input
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                ref={innerRef}
                autoFocus={autoFocus}
                inputType={InputTypeEnum.TEXT}
                autoCorrect={false}
                autoComplete="off"
                keyboardAppearance="light"
                maxLength={4}
                keyboardType="number-pad"
                placeholder={placeholder}
                viewStyle={BirthdayInputStyle.inputView}
                inputStyle={BirthdayInputStyle.input}
            />
        ),
        []
    );

    return (
        <View style={[BirthdayInputStyle.container, style]}>
            <ValueInput
                value={birthday.year}
                onChange={onYearChange}
                onKeyPress={onYearKeyPress}
                innerRef={inputYear}
                autoFocus={yearAutoFocus}
                placeholder="YYYY"
            />
            <Text style={BirthdayInputStyle.slash}>/</Text>
            <ValueInput
                value={birthday.month}
                onChange={onMonthChange}
                onKeyPress={onMonthKeyPress}
                innerRef={inputMonth}
                autoFocus={monthAutoFocus}
                placeholder="MM"
            />
            <Text style={BirthdayInputStyle.slash}>/</Text>
            <ValueInput
                value={birthday.day}
                onChange={onDayChange}
                onKeyPress={onDayKeyPress}
                innerRef={inputDay}
                autoFocus={dayAutoFocus}
                placeholder="DD"
            />
        </View>
    );
};

BirthdayInput.defaultProps = BirthdayInputDefaultProps;
