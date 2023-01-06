import React from 'react';
import { MatchList } from '@components/messages/MatchList/MatchList';
import { MessagesList } from '@components/messages/MessagesList/MessagesList';
import { MessagesHeader } from '@components/messages/MessagesHeader/MessagesHeader';
import { Screen } from '@components/general/Screen/Screen';
import { MessagesScreenStyle } from '@screens/tab/MessagesScreen/MessagesScreen.style';

export const MessagesScreen = (): JSX.Element => (
    <Screen style={MessagesScreenStyle.screen}>
        <MessagesHeader />
        <MatchList />
        <MessagesList />
    </Screen>
);
