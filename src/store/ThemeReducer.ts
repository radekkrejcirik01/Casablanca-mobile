import { createSlice } from '@reduxjs/toolkit';

export const ThemeReducer = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: false
    },
    reducers: {
        setIsDarkMode: (state, action) => {
            state.isDarkMode = action.payload;
        }
    }
});

export const { setIsDarkMode } = ThemeReducer.actions;

export default ThemeReducer.reducer;
