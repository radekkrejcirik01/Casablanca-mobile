import { createSlice } from '@reduxjs/toolkit';
import { User } from '@store/index.props';

const initialState: User = {
    token: null,
    firstname: null,
    email: null,
    birthday: {
        year: null,
        month: null,
        day: null,
        value: null
    },
    photos: [],
    tags: [],
    gender: null,
    showMe: null,
    password: null
};

export const UserReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserToken: (state, action) => {
            state.token = action.payload;
        },
        setFirstnameAction: (state, action) => {
            state.firstname = action.payload;
        },
        setEmailAction: (state, action) => {
            state.email = action.payload;
        },
        setBirthdayYearAction: (state, action) => {
            state.birthday.year = action.payload;
        },
        setBirthdayMonthAction: (state, action) => {
            state.birthday.month = action.payload;
        },
        setBirthdayDayAction: (state, action) => {
            state.birthday.day = action.payload;
        },
        setBirthdayValueAction: (state, action) => {
            state.birthday.value = action.payload;
        },
        addPhotoAction: (state, action) => {
            state.photos = [...state.photos, action.payload];
        },
        removePhotoAction: (state, action) => {
            let arr: Array<string> = state.photos;
            arr = arr.filter((photo: string) => photo !== action.payload);
            state.photos = arr;
        },
        addTagAction: (state, action) => {
            state.tags = [...state.tags, action.payload];
        },
        removeTagAction: (state, action) => {
            let arr: Array<string> = state.tags;
            arr = arr.filter((tag: string) => tag !== action.payload);
            state.tags = arr;
        },
        setGenderAction: (state, action) => {
            state.gender = action.payload;
        },
        setShowMeAction: (state, action) => {
            state.showMe = action.payload;
        },
        setPasswordAction: (state, action) => {
            state.password = action.payload;
        },
        resetUserState: () => initialState
    }
});

export const {
    setUserToken,
    setFirstnameAction,
    setEmailAction,
    setBirthdayYearAction,
    setBirthdayMonthAction,
    setBirthdayDayAction,
    setBirthdayValueAction,
    addPhotoAction,
    removePhotoAction,
    addTagAction,
    removeTagAction,
    setGenderAction,
    setShowMeAction,
    setPasswordAction,
    resetUserState
} = UserReducer.actions;

export default UserReducer.reducer;
