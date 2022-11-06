import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import {
    BottomTabBar,
    BottomTabBarProps,
    BottomTabNavigationOptions,
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { BottomTabNavigatorEnum } from '@navigation/BottomTabNavigator/BottomTabNavigator.enum';
import { ProfileScreen } from '@screens/tab/ProfileScreen/ProfileScreen';
import { SwipeScreen } from '@screens/tab/SwipeScreen/SwipeScreen';
import { MessagesScreen } from '@screens/tab/MessagesScreen/MessagesScreen';
import { CloseFriendsScreen } from '@screens/tab/CloseFriendsScreen/CloseFriendsScreen';
import {
    BottomTabNavigatorOptions,
    MessagesTabOptions,
    ProfileTabOptions,
    SwipeTabOptions,
    CloseFriendsTabOptions
} from '@navigation/BottomTabNavigator/BottomTabNavigator.options';
import { ReducerProps } from '@store/index.props';
import { useAnimated } from '@hooks/useAnimated';
import { BottomTabNavigatorStyle } from '@navigation/BottomTabNavigator/BottomTabNavigator.style';
import { useGetTabBarHeight } from '@hooks/useGetTabBarHeight';
import AnimatedValue = Animated.AnimatedValue;

export const BottomTabNavigator = (): JSX.Element => {
    const TabBar = createBottomTabNavigator();

    const { isVisible } = useSelector((state: ReducerProps) => state.bottomBar);

    const animatedValue = useRef(new Animated.Value(1)).current;
    const { animationCallback } = useAnimated(animatedValue);

    const { onLayout, tabBarHeight } = useGetTabBarHeight();

    useEffect(() => {
        if (isVisible) {
            animationCallback(1);
        } else {
            animationCallback(-tabBarHeight);
        }
    }, [animationCallback, isVisible, tabBarHeight]);

    const style = useMemo(
        (): { bottom: AnimatedValue } => ({
            bottom: animatedValue
        }),
        [animatedValue]
    );

    const tabBar = useCallback(
        (props: BottomTabBarProps) => (
            <Animated.View onLayout={onLayout} style={style}>
                <BottomTabBar {...props} />
            </Animated.View>
        ),
        [onLayout, style]
    );

    const profileTabOptions = useMemo(
        (): BottomTabNavigationOptions => ({
            ...ProfileTabOptions,
            tabBarStyle: [
                BottomTabNavigatorStyle.tabBar,
                BottomTabNavigatorStyle.tabBarProfile,
                { marginTop: -tabBarHeight }
            ]
        }),
        [tabBarHeight]
    );

    return (
        <TabBar.Navigator
            initialRouteName={BottomTabNavigatorEnum.SwipeTab}
            screenOptions={BottomTabNavigatorOptions}
            tabBar={tabBar}
        >
            <TabBar.Screen
                name={BottomTabNavigatorEnum.ProfileTab}
                component={ProfileScreen}
                options={profileTabOptions}
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
