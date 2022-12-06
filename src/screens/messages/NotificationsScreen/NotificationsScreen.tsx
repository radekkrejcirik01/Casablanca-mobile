import React, { useCallback, useMemo } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from '@components/general/ListItem/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerProps } from '@store/index.props';
import { updateRequest } from '@utils/Axios/Axios.service';
import {
    NotificationsInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';
import { setNotificationsAction } from '@store/UserReducer';
import { NotificationsScreenStyle } from '@screens/messages/NotificationsScreen/NotificationsScreen.style';

export const NotificationsScreen = (): JSX.Element => {
    const { email, notifications } = useSelector(
        (state: ReducerProps) => state.user
    );
    const dispatch = useDispatch();

    const switchNotificationsValue = useMemo(
        (): boolean => !!notifications,
        [notifications]
    );

    const toggleNotification = useCallback(
        (value: boolean) => {
            const notificationsValue = value ? 1 : 0;
            updateRequest<ResponseInterface, NotificationsInterface>(
                'user/notifications/update',
                {
                    email,
                    notifications: notificationsValue
                }
            ).subscribe();

            dispatch(setNotificationsAction(notificationsValue));
        },
        [dispatch, email]
    );

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
