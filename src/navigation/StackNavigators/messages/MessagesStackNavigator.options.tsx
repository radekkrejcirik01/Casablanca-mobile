import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { ChatHeader } from '@components/chat/ChatHeader/ChatHeader';
import { StackNavigatorStyle } from '@navigation/StackNavigators/StackNavigator.style';

export const NotificationsTitle: StackNavigationOptions = {
    headerTitle: 'Notifications'
};

export const ChatScreenOptions: StackNavigationOptions = {
    header: () => <ChatHeader />,
    cardStyle: StackNavigatorStyle.blackBackground
};
