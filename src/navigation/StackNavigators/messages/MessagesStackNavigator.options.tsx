import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { ChatHeader } from '@components/chat/ChatHeader/ChatHeader';

export const NotificationsTitle: StackNavigationOptions = {
    headerTitle: 'Notifications'
};

export const ChatScreenHeader: StackNavigationOptions = {
    header: () => <ChatHeader />
};
