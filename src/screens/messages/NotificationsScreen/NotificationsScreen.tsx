import React from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from '@components/general/ListItem/ListItem';
import { NotificationsScreenStyle } from '@screens/messages/NotificationsScreen/NotificationsScreen.style';
import { useSettings } from '@hooks/useSettings';

export const NotificationsScreen = (): JSX.Element => {
    const { switchNotificationsValue, toggleNotification } = useSettings();

    return (
        <ScrollView style={NotificationsScreenStyle.container}>
            <ListItem
                title="Receive notifications"
                switchValue={switchNotificationsValue}
                hasSwitch
                toggleSwitch={toggleNotification}
            />
        </ScrollView>
    );
};
