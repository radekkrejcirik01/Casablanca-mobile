import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Title } from '@components/general/Title/Title';
import { CloseFriendsScreenStyle } from '@screens/tab/CloseFriendsScreen/CloseFriendsScreen.style';
import { CardList } from '@components/closeFriends/CardList/CardList';
import { useModal } from '@hooks/useModal';
import { InfoModal } from '@components/general/InfoModal/InfoModal';

export const CloseFriendsScreen = (): JSX.Element => {
    const data = [
        { name: 'Radek', description: 'Stavovské divadlo', date: '28. 7.' },
        { name: 'Tomas', description: 'Národní divadlo', date: '28. 7.' }
    ];

    const { modalVisible, showModal, hideModal } = useModal();

    const title = 'Welcome to close friends! 🎉';
    const description =
        'Here you can check your friends upcoming activities. You can share new  We also recommend sharing your new plans with new people with your closest friends for safety policy';

    useEffect(() => {
        showModal();
    }, [showModal]);

    return (
        <SafeAreaView style={CloseFriendsScreenStyle.container}>
            <Title
                title="Close friends"
                style={CloseFriendsScreenStyle.title}
            />
            <CardList data={data} />
            <InfoModal
                title={title}
                description={description}
                isVisible={modalVisible}
                onClose={hideModal}
            />
        </SafeAreaView>
    );
};
