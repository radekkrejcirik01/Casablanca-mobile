import { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import { useSelector } from 'react-redux';
import { ReducerProps } from '@store/index.props';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    RegisterDeviceInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';

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
            postRequest<ResponseInterface, RegisterDeviceInterface>(
                'https://43bblrwkdc.execute-api.eu-central-1.amazonaws.com/pushnotifications/registerDevice',
                {
                    email,
                    deviceToken: fcmToken
                }
            ).subscribe();
        }
    }, [email, fcmToken]);

    return { requestUserPermission };
};
