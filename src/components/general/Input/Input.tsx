import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { TextInput, View } from 'react-native';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import {
    InputDefaultProps,
    InputProps
} from '@components/general/Input/Input.props';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';
import { InputStyle } from '@components/general/Input/Input.style';

export const Input = forwardRef(
    (
        {
            placeholder,
            value,
            onChange,
            inputType,
            viewStyle,
            inputStyle,
            selectionColor,
            placeholderTextColor,
            iconRight,
            ...props
        }: InputProps,
        ref
    ): JSX.Element => {
        const [inputValue, setInputValue] = useState<string>();
        const [isSecured, setIsSecured] = useState<boolean>(
            inputType === InputTypeEnum.PASSWORD
        );

        useEffect(() => {
            setInputValue(value);
        }, [value]);

        const keyboardType = useMemo(() => {
            if (inputType === InputTypeEnum.EMAIL) {
                return 'email-address';
            }
            return 'default';
        }, [inputType]);

        const SecuredIcon = (): JSX.Element => (
            <TouchableOpacity
                onPress={() => setIsSecured(!isSecured)}
                disabled={inputType !== InputTypeEnum.PASSWORD}
            >
                {isSecured ? (
                    <Icon name={IconEnum.LOCK} size={25} />
                ) : (
                    <Icon name={IconEnum.UNLOCK} size={25} />
                )}
            </TouchableOpacity>
        );

        return (
            <View style={[InputStyle.container, viewStyle]}>
                <TextInput
                    ref={ref}
                    value={inputValue}
                    placeholder={placeholder}
                    selectionColor={selectionColor}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardAppearance="light"
                    keyboardType={keyboardType}
                    style={[InputStyle.input, inputStyle]}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={isSecured}
                    onChangeText={(e) => {
                        setInputValue(e);
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                    {...props}
                />
                {inputType === InputTypeEnum.PASSWORD ? (
                    <SecuredIcon />
                ) : (
                    iconRight
                )}
            </View>
        );
    }
);

Input.defaultProps = InputDefaultProps;
