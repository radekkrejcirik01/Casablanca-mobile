import { createSlice } from '@reduxjs/toolkit';
import { Save } from '@store/index.props';

const initialState: Save = {
    isVisible: false
};

export const SaveReducer = createSlice({
    name: 'save',
    initialState,
    reducers: {
        setSaveVisible: (state, action) => {
            state.isVisible = action.payload;
        }
    }
});

export const { setSaveVisible } = SaveReducer.actions;

export default SaveReducer.reducer;
