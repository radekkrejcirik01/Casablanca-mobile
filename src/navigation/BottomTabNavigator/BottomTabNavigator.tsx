import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorEnum } from '@navigation/BottomTabNavigator/BottomTabNavigator.enum';
import { ProfileScreen } from '@screens/tab/ProfileScreen/ProfileScreen';
import { MatchScreen } from '@screens/tab/MatchScreen/MatchScreen';
import { ChatScreen } from '@screens/tab/ChatScreen/ChatScreen';
import { EventsScreen } from '@screens/tab/EventsScreen/EventsScreen';
import {
    BottomTabNavigatorOptions,
    ChatTabOptions,
    EventsTabOptions,
    MatchTabOptions,
    ProfileTabOptions
} from '@navigation/BottomTabNavigator/BottomTabNavigator.options';

export const BottomTabNavigator = (): JSX.Element => {
    const TabBar = createBottomTabNavigator();

    return (
        <TabBar.Navigator
            initialRouteName={BottomTabNavigatorEnum.MatchTab}
            screenOptions={BottomTabNavigatorOptions}
        >
            <TabBar.Screen
                name={BottomTabNavigatorEnum.ProfileTab}
                component={ProfileScreen}
                options={ProfileTabOptions}
            />
            <TabBar.Screen
                name={BottomTabNavigatorEnum.MatchTab}
                component={MatchScreen}
                options={MatchTabOptions}
            />
            <TabBar.Screen
                name={BottomTabNavigatorEnum.ChatTab}
                component={ChatScreen}
                options={ChatTabOptions}
            />
            <TabBar.Screen
                name={BottomTabNavigatorEnum.EventsTab}
                component={EventsScreen}
                options={EventsTabOptions}
            />
        </TabBar.Navigator>
    );
};
