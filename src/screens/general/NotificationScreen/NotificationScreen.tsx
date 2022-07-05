import React from 'react';
import { SafeAreaView } from 'react-native';
import { NotificationScreenStyle } from '@screens/general/NotificationScreen/NotificationScreen.style';

export const NotificationScreen = (): JSX.Element => (
    <SafeAreaView style={NotificationScreenStyle.container} />
);
