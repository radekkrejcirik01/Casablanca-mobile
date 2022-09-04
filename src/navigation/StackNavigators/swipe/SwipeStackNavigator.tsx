import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { NavigationScreenHeader } from '@navigation/StackNavigators/StackNavigator.options';
import { FiltersScreen } from '@screens/swipe/FiltersScreen';
import { FiltersTitle } from '@navigation/StackNavigators/swipe/SwipeStackNavigator.options';
import { SwipeStackNavigatorEnum } from '@navigation/StackNavigators/swipe/SwipeStackNavigator.enum';

const Swipe = createStackNavigator<ParamListBase>();

export const SwipeStackNavigator = (): JSX.Element => (
    <Swipe.Navigator>
        <Swipe.Screen
            name={SwipeStackNavigatorEnum.FiltersScreen}
            component={FiltersScreen}
            options={{ ...NavigationScreenHeader, ...FiltersTitle }}
        />
    </Swipe.Navigator>
);
