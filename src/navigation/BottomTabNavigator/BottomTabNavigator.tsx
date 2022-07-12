import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorEnum } from '@navigation/BottomTabNavigator/BottomTabNavigator.enum';
import { ProfileScreen } from '@screens/tab/ProfileScreen/ProfileScreen';
import { SwipeScreen } from '@screens/tab/SwipeScreen/SwipeScreen';
import { MessagesScreen } from '@screens/tab/MessagesScreen/MessagesScreen';
import { EventsScreen } from '@screens/tab/EventsScreen/EventsScreen';
import {
    BottomTabNavigatorOptions,
    MessagesTabOptions,
    EventsTabOptions,
    ProfileTabOptions,
    SwipeTabOptions
} from '@navigation/BottomTabNavigator/BottomTabNavigator.options';

export const BottomTabNavigator = (): JSX.Element => {
    const TabBar = createBottomTabNavigator();

    return (
        <TabBar.Navigator
            initialRouteName={BottomTabNavigatorEnum.SwipeTab}
            screenOptions={BottomTabNavigatorOptions}
        >
            <TabBar.Screen
                name={BottomTabNavigatorEnum.ProfileTab}
                component={ProfileScreen}
                options={ProfileTabOptions}
            />
            <TabBar.Screen
                name={BottomTabNavigatorEnum.SwipeTab}
                component={SwipeScreen}
                options={SwipeTabOptions}
            />
            <TabBar.Screen
                name={BottomTabNavigatorEnum.MessagesTab}
                component={MessagesScreen}
                options={MessagesTabOptions}
            />
            <TabBar.Screen
                name={BottomTabNavigatorEnum.EventsTab}
                component={EventsScreen}
                options={EventsTabOptions}
            />
        </TabBar.Navigator>
    );
};
