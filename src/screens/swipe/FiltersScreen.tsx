import React from 'react';
import { ScrollView } from 'react-native';
import { FiltersList } from '@components/swipe/FiltersList/FiltersList';
import { FiltersScreenStyle } from '@screens/swipe/FiltersScreen.style';

export const FiltersScreen = (): JSX.Element => (
    <ScrollView style={FiltersScreenStyle.container}>
        <FiltersList />
    </ScrollView>
);
