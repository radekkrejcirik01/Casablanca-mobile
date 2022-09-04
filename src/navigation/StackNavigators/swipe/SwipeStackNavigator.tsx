import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { NavigationScreenHeader } from '@navigation/StackNavigators/StackNavigator.options';
import { FiltersScreen } from '@screens/swipe/FiltersScreen';
import { FiltersTitle } from '@navigation/StackNavigators/swipe/SwiperStackNavigator.options';
import { SwiperStackNavigatorEnum } from '@navigation/StackNavigators/swipe/SwiperStackNavigator.enum';

const Swiper = createStackNavigator<ParamListBase>();

export const SwiperStackNavigator = (): JSX.Element => (
    <Swiper.Navigator>
        <Swiper.Screen
            name={SwiperStackNavigatorEnum.FiltersScreen}
            component={FiltersScreen}
            options={{ ...NavigationScreenHeader, ...FiltersTitle }}
        />
    </Swiper.Navigator>
);
