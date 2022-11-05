import { createSlice } from '@reduxjs/toolkit';
import { BottomBar } from '@store/index.props';

const initialState: BottomBar = {
    isVisible: true
};

export const BottomBarReducer = createSlice({
    name: 'bottomBar',
    initialState,
    reducers: {
        setBottomBarVisible: (state, action) => {
            state.isVisible = action.payload;
        }
    }
});

export const { setBottomBarVisible } = BottomBarReducer.actions;

export default BottomBarReducer.reducer;
