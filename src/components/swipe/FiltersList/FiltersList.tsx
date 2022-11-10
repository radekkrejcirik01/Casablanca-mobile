import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ListItem } from '@components/general/ListItem/ListItem';
import { useNavigation } from '@hooks/useNavigation';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { ReducerProps } from '@store/index.props';

export const FiltersList = (): JSX.Element => {
    const { showMe } = useSelector((state: ReducerProps) => state.user);

    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);

    const openDistanceScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.DistanceScreen);
    }, [navigateTo]);

    const openShowMeScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.ShowMeScreen);
    }, [navigateTo]);

    return (
        <>
            <ListItem
                title="Distance"
                description="100km"
                hasArrow
                onPress={openDistanceScreen}
            />
            <ListItem
                title="Show me"
                description={showMe}
                hasArrow
                onPress={openShowMeScreen}
            />
        </>
    );
};
