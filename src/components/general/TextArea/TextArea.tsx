import React from 'react';
import { Input } from '@components/general/Input/Input';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { TextAreaStyle } from '@components/general/TextArea/TextArea.style';
import { TextAreaProps } from '@components/general/TextArea/TextArea.props';

export const TextArea = ({ onChange }: TextAreaProps): JSX.Element => (
    <Input
        onChange={onChange}
        inputType={InputTypeEnum.TEXT_AREA}
        multiline
        inputStyle={TextAreaStyle.input}
        viewStyle={TextAreaStyle.view}
    />
);
