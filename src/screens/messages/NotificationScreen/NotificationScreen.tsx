import React from 'react';
import { SafeAreaView } from 'react-native';
import { NotificationScreenStyle } from '@screens/messages/NotificationScreen/NotificationScreen.style';

export const NotificationScreen = (): JSX.Element => (
    <SafeAreaView style={NotificationScreenStyle.container} />
);
