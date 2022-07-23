import React from 'react';
import { SafeAreaView } from 'react-native';
import { Title } from '@components/general/Title/Title';
import { CloseFriendsScreenStyle } from '@screens/tab/CloseFriendsScreen/CloseFriendsScreen.style';
import { TabList } from '@components/closeFriends/TabList/TabList';

export const CloseFriendsScreen = (): JSX.Element => {
    const data = [{ name: 'radek' }, { name: 'zuzka' }];

    return (
        <SafeAreaView style={CloseFriendsScreenStyle.container}>
            <Title
                title="Close friends"
                style={CloseFriendsScreenStyle.title}
            />
            <TabList data={data} />
        </SafeAreaView>
    );
};
