import { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import { useSelector } from 'react-redux';
import { ReducerProps } from '@store/index.props';

export const useMessaging = (): {
    requestUserPermission: () => void;
} => {
    const { email } = useSelector((state: ReducerProps) => state.user);

    const [fcmToken, setFcmToken] = useState<string>();

    const requestUserPermission = async () => {
        await messaging().requestPermission();
    };

    const getDeviceToken = async () => {
        await messaging()
            .getToken()
            .then((token: string) => {
                setFcmToken(token);
            });
    };

    const onTokenRefresh = () => {
        messaging().onTokenRefresh((token: string) => {
            setFcmToken(token);
        });
    };

    useEffect(() => {
        if (email) {
            requestUserPermission().catch();
            getDeviceToken().catch();
            onTokenRefresh();
        }
    }, [email]);

    useEffect(() => {
        if (fcmToken) {
            // Trigger update token api
        }
    }, [fcmToken]);

    return { requestUserPermission };
};
