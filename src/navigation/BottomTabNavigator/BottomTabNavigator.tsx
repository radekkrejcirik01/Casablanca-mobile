import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorEnum } from '@navigation/BottomTabNavigator/BottomTabNavigator.enum';
import { ProfileScreen } from '@screens/tab/ProfileScreen/ProfileScreen';
import { MatchScreen } from '@screens/tab/MatchScreen/MatchScreen';
import { ChatScreen } from '@screens/tab/ChstScreen/ChatScreen';
import { EventsScreen } from '@screens/tab/EventsScreen/EventsScreen';

export const BottomTabNavigator = (): JSX.Element => {
    const TabBar = createBottomTabNavigator();

    return (
        <TabBar.Navigator initialRouteName={BottomTabNavigatorEnum.MatchTab}>
            <TabBar.Screen
                name={BottomTabNavigatorEnum.ProfileTab}
                component={ProfileScreen}
            />
            <TabBar.Screen
                name={BottomTabNavigatorEnum.MatchTab}
                component={MatchScreen}
            />
            <TabBar.Screen
                name={BottomTabNavigatorEnum.ChatTab}
                component={ChatScreen}
            />
            <TabBar.Screen
                name={BottomTabNavigatorEnum.EventsTab}
                component={EventsScreen}
            />
        </TabBar.Navigator>
    );
};
