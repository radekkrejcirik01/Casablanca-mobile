import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorEnum } from '@navigation/BottomTabNavigator/BottomTabNavigator.enum';
import { ProfileScreen } from '@screens/profile/ProfileScreen/ProfileScreen';
import { SwipeScreen } from '@screens/swipe/SwipeScreen/SwipeScreen';
import { MessagesScreen } from '@screens/messages/MessagesScreen/MessagesScreen';
import { CloseFriendsScreen } from '@screens/closeFriends/CloseFriendsScreen/CloseFriendsScreen';
import {
    BottomTabNavigatorOptions,
    MessagesTabOptions,
    ProfileTabOptions,
    SwipeTabOptions,
    CloseFriendsTabOptions
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
                name={BottomTabNavigatorEnum.CloseFriendsTab}
                component={CloseFriendsScreen}
                options={CloseFriendsTabOptions}
            />
        </TabBar.Navigator>
    );
};
