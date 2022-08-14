import { createSlice } from '@reduxjs/toolkit';

export const SaveReducer = createSlice({
    name: 'save',
    initialState: {
        isVisible: false
    },
    reducers: {
        setSaveVisible: (state, action) => {
            state.isVisible = action.payload;
        }
    }
});

export const { setSaveVisible } = SaveReducer.actions;

export default SaveReducer.reducer;
