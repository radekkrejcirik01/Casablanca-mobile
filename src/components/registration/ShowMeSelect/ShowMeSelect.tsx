import React from 'react';
import { View } from 'react-native';
import { ShowMeSelectEnum } from '@components/registration/ShowMeSelect/ShowMeSelect.enum';
import {
    ShowMeSelectDefaultProps,
    ShowMeSelectProps
} from '@components/registration/ShowMeSelect/ShowMeSelect.props';
import { SelectBox } from '@components/registration/SelectBox/SelectBox';

export const ShowMeSelect = ({
    showMe,
    onSelect,
    style
}: ShowMeSelectProps): JSX.Element => (
    <View style={style}>
        <SelectBox
            onPressIn={() => onSelect(ShowMeSelectEnum.WOMEN)}
            title={ShowMeSelectEnum.WOMEN}
            value={showMe === ShowMeSelectEnum.WOMEN}
        />
        <SelectBox
            onPressIn={() => onSelect(ShowMeSelectEnum.MEN)}
            title={ShowMeSelectEnum.MEN}
            value={showMe === ShowMeSelectEnum.MEN}
        />
        <SelectBox
            onPressIn={() => onSelect(ShowMeSelectEnum.ALL)}
            title={ShowMeSelectEnum.ALL}
            value={showMe === ShowMeSelectEnum.ALL}
        />
    </View>
);

ShowMeSelect.defaultProps = ShowMeSelectDefaultProps;
