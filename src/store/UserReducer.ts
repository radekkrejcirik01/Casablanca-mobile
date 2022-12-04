import { createSlice } from '@reduxjs/toolkit';
import { User } from '@store/index.props';

const initialState: User = {
    token: null,
    firstname: null,
    email: null,
    birthday: null,
    photos: [],
    tags: [],
    about: null,
    gender: null,
    showMe: null,
    distancePreference: null,
    agePreference: null,
    filterByTags: null,
    notifications: null,
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
        setBirthdayAction: (state, action) => {
            state.birthday = action.payload;
        },
        setPhotosAction: (state, action) => {
            state.photos = action.payload;
        },
        addTagAction: (state, action) => {
            state.tags = [...state.tags, action.payload];
        },
        removeTagAction: (state, action) => {
            let arr: Array<string> = state.tags;
            arr = arr.filter((tag: string) => tag !== action.payload);
            state.tags = arr;
        },
        setTagsAction: (state, action) => {
            state.tags = action.payload;
        },
        setAboutAction: (state, action) => {
            state.about = action.payload;
        },
        setGenderAction: (state, action) => {
            state.gender = action.payload;
        },
        setShowMeAction: (state, action) => {
            state.showMe = action.payload;
        },
        setDistancePreferenceAction: (state, action) => {
            state.distancePreference = action.payload;
        },
        setAgePreferenceAction: (state, action) => {
            state.agePreference = action.payload;
        },
        setFilterByTagsAction: (state, action) => {
            state.filterByTags = action.payload;
        },
        setNotificationsAction: (state, action) => {
            state.notifications = action.payload;
        },
        setPasswordAction: (state, action) => {
            state.password = action.payload;
        },
        setUserStateAction: (state, action) => {
            action.payload.token = action.payload.email;
            return action.payload;
        },
        resetUserState: () => initialState
    }
});

export const {
    setUserToken,
    setFirstnameAction,
    setEmailAction,
    setBirthdayAction,
    setPhotosAction,
    addTagAction,
    removeTagAction,
    setTagsAction,
    setAboutAction,
    setGenderAction,
    setShowMeAction,
    setDistancePreferenceAction,
    setAgePreferenceAction,
    setFilterByTagsAction,
    setNotificationsAction,
    setPasswordAction,
    setUserStateAction,
    resetUserState
} = UserReducer.actions;

export default UserReducer.reducer;
