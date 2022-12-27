import { useCallback, useEffect } from 'react';
import messaging, {
    FirebaseMessagingTypes
} from '@react-native-firebase/messaging';
import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { useFlashMessage } from '@hooks/useFlashMessage';
import { BottomTabNavigatorEnum } from '@navigation/BottomTabNavigator/BottomTabNavigator.enum';

export const useNotifications = (
    navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>,
    isReady: boolean
) => {
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
                        displayMessage(
                            remoteMessage.notification.title,
                            remoteMessage.notification.body,
                            navigateToMessages
                        );
                    }
                }
            );
        }
    }, [displayMessage, isReady, navigateToMessages]);
};
