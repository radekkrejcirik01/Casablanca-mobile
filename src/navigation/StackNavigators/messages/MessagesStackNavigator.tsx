import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { NavigationScreenHeader } from '@navigation/StackNavigators/StackNavigator.options';
import { MessagesStackNavigatorEnum } from '@navigation/StackNavigators/messages/MessagesStackNavigator.enum';
import { NotificationsScreen } from '@screens/messages/NotificationsScreen/NotificationsScreen';
import { ChatScreen } from '@screens/messages/ChatScreen/ChatScreen';
import {
    ChatScreenOptions,
    NotificationsTitle
} from '@navigation/StackNavigators/messages/MessagesStackNavigator.options';

const Messages = createStackNavigator<ParamListBase>();

export const MessagesStackNavigator = (): JSX.Element => (
    <Messages.Navigator>
        <Messages.Screen
            name={MessagesStackNavigatorEnum.NotificationsScreen}
            component={NotificationsScreen}
            options={{ ...NavigationScreenHeader, ...NotificationsTitle }}
        />
        <Messages.Screen
            name={MessagesStackNavigatorEnum.ChatScreen}
            component={ChatScreen}
            options={ChatScreenOptions}
        />
    </Messages.Navigator>
);
