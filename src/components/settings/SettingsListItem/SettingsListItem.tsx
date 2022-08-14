import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import {
    SettingsListItemDefaultProps,
    SettingsListItemProps
} from '@components/settings/SettingsListItem/SettingsListItem.props';
import { SettingsListItemStyle } from '@components/settings/SettingsListItem/SettingsListItem.style';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { IconEnum } from '@components/icon/Icon.enum';
import { Icon } from '@components/icon/Icon';
import COLORS from '@constants/COLORS';

export const SettingsListItem = ({
    icon,
    title,
    description,
    hasSwitch,
    toggleSwitch,
    hasArrow,
    onPress,
    style
}: SettingsListItemProps): JSX.Element => {
    const [switchValue, setSwitchValue] = useState<boolean>(false);

    const onValueChange = () => {
        toggleSwitch(!switchValue);
        setSwitchValue(!switchValue);
    };

    return (
        <View style={style}>
            <TouchableOpacity
                onPress={onPress}
                disabled={hasSwitch}
                style={SettingsListItemStyle.touchableOpacity}
            >
                {icon}
                <Text style={SettingsListItemStyle.title}>{title}</Text>
                <View style={SettingsListItemStyle.containerRight}>
                    <Text style={SettingsListItemStyle.description}>
                        {description}
                    </Text>
                    {hasSwitch && (
                        <Switch
                            onValueChange={onValueChange}
                            value={switchValue}
                            ios_backgroundColor={COLORS.LIGHTGRAY}
                        />
                    )}
                    {hasArrow && <Icon name={IconEnum.BACK_RIGHT} size={18} />}
                </View>
            </TouchableOpacity>
        </View>
    );
};

SettingsListItem.defaultProps = SettingsListItemDefaultProps;
