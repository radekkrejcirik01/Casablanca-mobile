import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import messaging, {
    FirebaseMessagingTypes
} from '@react-native-firebase/messaging';
import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { useFlashMessage } from '@hooks/useFlashMessage';
import { BottomTabNavigatorEnum } from '@navigation/BottomTabNavigator/BottomTabNavigator.enum';
import { MessagesStackNavigatorEnum } from '@navigation/StackNavigators/messages/MessagesStackNavigator.enum';
import {
    setChatUserAction,
    setPerformLoadConversationsAction,
    setPerformLoadMatchesAction
} from '@store/MessagingReducer';
import { NotificationTypeEnum } from '../enums/Messaging/NotificationType.enum';

export const useNotifications = (
    navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>,
    isReady: boolean
) => {
    const dispatch = useDispatch();

    const displayMessage = useFlashMessage();

    const navigateToMessages = useCallback(() => {
        navigationRef?.current?.navigate(
            BottomTabNavigatorEnum.MessagesTab as never
        );
    }, [navigationRef]);

    useEffect(() => {
        if (isReady) {
            // On open notification from killed state
            messaging()
                .getInitialNotification()
                .then((remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
                    if (remoteMessage) {
                        navigateToMessages();
                    }
                });

            // On open notification from background state
            messaging().onNotificationOpenedApp(
                (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
                    if (remoteMessage) {
                        navigateToMessages();
                    }
                }
            );

            // On notification comes when being in app
            messaging().onMessage(
                (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
                    if (remoteMessage) {
                        const routeName =
                            navigationRef?.current?.getCurrentRoute()?.name;

                        if (routeName === BottomTabNavigatorEnum.MessagesTab) {
                            if (
                                remoteMessage.data.type ===
                                NotificationTypeEnum.MATCH
                            ) {
                                dispatch(setPerformLoadMatchesAction(true));
                            }
                            if (
                                remoteMessage.data.type ===
                                NotificationTypeEnum.MESSAGE
                            ) {
                                dispatch(
                                    setPerformLoadConversationsAction(true)
                                );
                            }
                            return;
                        }

                        if (
                            routeName === MessagesStackNavigatorEnum.ChatScreen
                        ) {
                            if (
                                remoteMessage.data.type ===
                                NotificationTypeEnum.MESSAGE
                            ) {
                                dispatch(
                                    setChatUserAction({
                                        email: remoteMessage.data.sender,
                                        firstname:
                                            remoteMessage.notification.title,
                                        message: remoteMessage.notification.body
                                    })
                                );
                            }
                            return;
                        }

                        displayMessage(
                            remoteMessage.notification.title,
                            remoteMessage.notification.body,
                            navigateToMessages
                        );
                    }
                }
            );
        }
    }, [dispatch, displayMessage, isReady, navigateToMessages, navigationRef]);
};
