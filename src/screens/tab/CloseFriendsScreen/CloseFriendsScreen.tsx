import React, { useEffect } from 'react';
import { Title } from '@components/general/Title/Title';
import { CloseFriendsScreenStyle } from '@screens/tab/CloseFriendsScreen/CloseFriendsScreen.style';
import { CardList } from '@components/closeFriends/CardList/CardList';
import { useModal } from '@hooks/useModal';
import { InfoModal } from '@components/general/InfoModal/InfoModal';
import {
    DESCRIPTION,
    TITLE
} from '@screens/tab/CloseFriendsScreen/CloseFriendsScreen.const';
import { Screen } from '@components/general/Screen/Screen';

export const CloseFriendsScreen = (): JSX.Element => {
    const data = [
        {
            name: 'Radek + 1',
            description: 'Stavovské divadlo',
            date: '28. 7. 19:00'
        },
        {
            name: 'Tomas + 1',
            description: 'Národní divadlo',
            date: '28. 7. 19:00'
        }
    ];

    const { modalVisible, showModal, hideModal } = useModal();

    useEffect(() => {
        showModal();
    }, [showModal]);

    return (
        <Screen style={CloseFriendsScreenStyle.screen}>
            <Title title="Close friends" />
            <CardList data={data} />
            <InfoModal
                title={TITLE}
                description={DESCRIPTION}
                isVisible={modalVisible}
                onClose={hideModal}
            />
        </Screen>
    );
};
