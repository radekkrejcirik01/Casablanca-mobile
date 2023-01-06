import { createSlice } from '@reduxjs/toolkit';
import { Messaging } from '@store/index.props';

const initialState: Messaging = {
    chatUser: null,
    performLoadConversations: false,
    performLoadMatches: false
};

export const MessagingReducer = createSlice({
    name: 'messaging',
    initialState,
    reducers: {
        setChatUserAction: (state, action) => {
            state.chatUser = action.payload;
        },
        setPerformLoadConversationsAction: (state, action) => {
            state.performLoadConversations = action.payload;
        },
        setPerformLoadMatchesAction: (state, action) => {
            state.performLoadMatches = action.payload;
        }
    }
});

export const {
    setChatUserAction,
    setPerformLoadConversationsAction,
    setPerformLoadMatchesAction
} = MessagingReducer.actions;

export default MessagingReducer.reducer;
