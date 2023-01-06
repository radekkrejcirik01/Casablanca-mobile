import { createSlice } from '@reduxjs/toolkit';
import { Swiper } from '@store/index.props';

const initialState: Swiper = {
    swipedUsers: [],
    likedUsers: []
};

export const SwiperReducer = createSlice({
    name: 'swiper',
    initialState,
    reducers: {
        setSwipedUser: (state, action) => {
            state.swipedUsers = [...state.swipedUsers, action.payload];
        },
        setLikedUser: (state, action) => {
            state.likedUsers = [...state.likedUsers, action.payload];
        },
        setRemoveLike: (state, action) => {
            let arr: Array<string> = state.likedUsers;
            arr = arr.filter((user: string) => user !== action.payload);
            state.likedUsers = arr;
        }
    }
});

export const { setSwipedUser, setLikedUser, setRemoveLike } =
    SwiperReducer.actions;

export default SwiperReducer.reducer;
