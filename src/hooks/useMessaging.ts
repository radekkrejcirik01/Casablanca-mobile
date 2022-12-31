import { useCallback, useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerProps } from '@store/index.props';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    RegisterDeviceInterface,
    ResponseInterface
} from '@models/Registration/Registration.interface';
import { setDeviceTokenAction } from '@store/DeviceReducer';

export const useMessaging = (): {
    requestUserPermission: () => void;
} => {
    const { email } = useSelector((state: ReducerProps) => state.user);
    const dispatch = useDispatch();

    const [authorizationStatus, setIsAuthorizationStatus] =
        useState<boolean>(false);

    const requestUserPermission = async () => {
        const status = await messaging().requestPermission();
        setIsAuthorizationStatus(status === 1);
    };

    const registerDevice = useCallback(
        (fcmToken: string) => {
            postRequest<ResponseInterface, RegisterDeviceInterface>(
                'https://43bblrwkdc.execute-api.eu-central-1.amazonaws.com/pushnotifications/registerDevice',
                {
                    email,
                    deviceToken: fcmToken
                }
            ).subscribe(() => {
                dispatch(setDeviceTokenAction(fcmToken));
            });
        },
        [dispatch, email]
    );

    const getDeviceToken = useCallback(async () => {
        await messaging()
            .getToken()
            .then((fcmToken: string) => {
                registerDevice(fcmToken);
            });
    }, [registerDevice]);

    const onTokenRefresh = useCallback(() => {
        messaging().onTokenRefresh((fcmToken: string) => {
            registerDevice(fcmToken);
        });
    }, [registerDevice]);

    useEffect(() => {
        if (email) {
            requestUserPermission().catch();
        }
    }, [email]);

    useEffect(() => {
        if (email && authorizationStatus) {
            getDeviceToken().catch();
            onTokenRefresh();
        }
    }, [authorizationStatus, email, getDeviceToken, onTokenRefresh]);

    return { requestUserPermission };
};
