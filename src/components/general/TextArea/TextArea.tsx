import React from 'react';
import { Input } from '@components/general/Input/Input';
import { InputTypeEnum } from '@components/general/Input/Input.enum';
import { TextAreaStyle } from '@components/general/TextArea/TextArea.style';
import {
    TextAreaDefaultProps,
    TextAreaProps
} from '@components/general/TextArea/TextArea.props';

export const TextArea = ({
    value,
    onChange,
    viewStyle
}: TextAreaProps): JSX.Element => (
    <Input
        value={value}
        onChange={onChange}
        inputType={InputTypeEnum.TEXT_AREA}
        multiline
        inputStyle={TextAreaStyle.input}
        viewStyle={[TextAreaStyle.view, viewStyle]}
    />
);

TextArea.defaultProps = TextAreaDefaultProps;
