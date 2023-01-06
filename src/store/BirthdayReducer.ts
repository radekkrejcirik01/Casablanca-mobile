import { createSlice } from '@reduxjs/toolkit';
import { Birthday } from '@store/index.props';

const initialState: Birthday = {
    year: null,
    month: null,
    day: null
};

export const BirthdayReducer = createSlice({
    name: 'birthday',
    initialState,
    reducers: {
        setBirthdayYearAction: (state, action) => {
            state.year = action.payload;
        },
        setBirthdayMonthAction: (state, action) => {
            state.month = action.payload;
        },
        setBirthdayDayAction: (state, action) => {
            state.day = action.payload;
        },
        resetBirthdayState: () => initialState
    }
});

export const {
    setBirthdayYearAction,
    setBirthdayMonthAction,
    setBirthdayDayAction,
    resetBirthdayState
} = BirthdayReducer.actions;

export default BirthdayReducer.reducer;
