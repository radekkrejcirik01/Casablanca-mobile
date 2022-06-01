import { createSlice } from '@reduxjs/toolkit';

export const RegistrationReducer = createSlice({
    name: 'registration',
    initialState: {
        firstname: null,
        email: null,
        birthday: {
            year: null,
            month: null,
            day: null
        },
        photos: [],
        tags: [],
        gender: null,
        whoShow: null,
        password: null
    },
    reducers: {
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
            let arr: Array<string> = state.photos;
            arr = arr.filter((tag: string) => tag !== action.payload);
            state.photos = arr;
        },
        setGenderAction: (state, action) => {
            state.gender = action.payload;
        },
        setWhoShowAction: (state, action) => {
            state.whoShow = action.payload;
        },
        setPasswordAction: (state, action) => {
            state.password = action.payload;
        }
    }
});

export const {
    setFirstnameAction,
    setEmailAction,
    setBirthdayYearAction,
    setBirthdayMonthAction,
    setBirthdayDayAction,
    addPhotoAction,
    removePhotoAction,
    addTagAction,
    removeTagAction,
    setGenderAction,
    setWhoShowAction,
    setPasswordAction
} = RegistrationReducer.actions;

export default RegistrationReducer.reducer;
