import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import COLORS from '@constants/COLORS';
import { StackNavigatorStyle } from '@navigation/StackNavigators/StackNavigator.style';
import { SaveHeader } from '@components/general/SaveHeader/SaveHeader';

export const NavigationScreenHeader: StackNavigationOptions = {
    headerTintColor: COLORS.WHITE,
    headerStyle: StackNavigatorStyle.navigationScreen,
    headerBackTitle: 'Back',
    headerRight: () => <SaveHeader />
};
