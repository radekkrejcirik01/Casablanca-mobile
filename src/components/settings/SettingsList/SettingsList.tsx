import React, { useCallback } from 'react';
import { Linking, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from '@components/general/ListItem/ListItem';
import { SettingsListStyle } from '@components/settings/SettingsList/SettingsList.style';
import { useNavigation } from '@hooks/useNavigation';
import { ProfileStackNavigatorEnum } from '@navigation/StackNavigators/profile/ProfileStackNavigator.enum';
import { RootStackNavigatorEnum } from '@navigation/RootNavigator/RootStackNavigator.enum';
import { resetUserState } from '@store/UserReducer';
import { PersistStorageKeys } from '@utils/PersistStorage/PersistStorage.enum';
import { PersistStorage } from '@utils/PersistStorage/PersistStorage';
import { setIsDarkMode } from '@store/ThemeReducer';
import { useTheme } from '@hooks/useTheme';
import THEMES from '@constants/THEMES';
import { ReducerProps } from '@store/index.props';
import {
    SettingsListDefaultProps,
    SettingsListProps
} from '@components/settings/SettingsList/SettingsList.props';

export const SettingsList = ({ style }: SettingsListProps): JSX.Element => {
    const { showMe } = useSelector((state: ReducerProps) => state.user);
    const dispatch = useDispatch();

    const { isDarkMode } = useTheme();

    const { navigateTo } = useNavigation(RootStackNavigatorEnum.ProfileStack);

    const openAboutScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.AboutScreen);
    }, [navigateTo]);

    const toggleSwitch = (value: boolean) => {
        console.log(JSON.stringify(value));
    };

    const openDistanceScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.DistanceScreen);
    }, [navigateTo]);

    const openShowMeScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.ShowMeScreen);
    }, [navigateTo]);

    const openHelpCenterScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.HelpCenterScreen);
    }, [navigateTo]);

    const openCommunityRulesScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.CommunityRulesScreen);
    }, [navigateTo]);

    const openPrivacyPolicyScreen = () => {
        Linking.openURL(
            'https://www.termsfeed.com/live/c0485039-5d23-4ad7-a4b9-0970911f8ec1'
        );
    };

    const openAccountScreen = useCallback(() => {
        navigateTo(ProfileStackNavigatorEnum.AccountScreen);
    }, [navigateTo]);

    const toggleDarkMode = useCallback(
        (value: boolean) => {
            dispatch(setIsDarkMode(value));

            const mode = value ? THEMES.DARK : THEMES.LIGHT;
            PersistStorage.setItem(PersistStorageKeys.THEME, mode).catch();
        },
        [dispatch]
    );

    const LogOut = useCallback(() => {
        dispatch(resetUserState());
        PersistStorage.setItem(PersistStorageKeys.TOKEN, '').catch();
    }, [dispatch]);

    return (
        <View style={style}>
            <ListItem
                title="About Casablanca"
                hasArrow
                onPress={openAboutScreen}
            />
            <ListItem
                title="Push notification"
                hasSwitch
                toggleSwitch={toggleSwitch}
            />
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
            <ListItem
                title="Help center"
                hasArrow
                onPress={openHelpCenterScreen}
            />
            <ListItem
                title="Community rules"
                hasArrow
                onPress={openCommunityRulesScreen}
            />
            <ListItem
                title="Privacy policy"
                hasArrow
                onPress={openPrivacyPolicyScreen}
            />
            <ListItem title="Account" hasArrow onPress={openAccountScreen} />
            <ListItem
                title="Dark mode"
                hasSwitch
                switchTrue={isDarkMode}
                toggleSwitch={toggleDarkMode}
            />
            <ListItem
                title="Log Out"
                onPress={LogOut}
                style={SettingsListStyle.lastItem}
            />
        </View>
    );
};

SettingsList.defaultProps = SettingsListDefaultProps;
