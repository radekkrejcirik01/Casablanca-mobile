import { createSlice } from '@reduxjs/toolkit';

export const UserReducer = createSlice({
    name: 'user',
    initialState: {
        token: null
    },
    reducers: {
        setUserToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

export const { setUserToken } = UserReducer.actions;

export default UserReducer.reducer;
