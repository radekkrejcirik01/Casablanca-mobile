import { createSlice } from '@reduxjs/toolkit';
import { Theme } from '@store/index.props';

const initialState: Theme = {
    isDarkMode: false
};

export const ThemeReducer = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setIsDarkMode: (state, action) => {
            state.isDarkMode = action.payload;
        }
    }
});

export const { setIsDarkMode } = ThemeReducer.actions;

export default ThemeReducer.reducer;
