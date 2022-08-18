import { createSlice } from '@reduxjs/toolkit';

export const ModalReducer = createSlice({
    name: 'modal',
    initialState: {
        isModalVisible: false
    },
    reducers: {
        setModalVisible: (state, action) => {
            state.isModalVisible = action.payload;
        }
    }
});

export const { setModalVisible } = ModalReducer.actions;

export default ModalReducer.reducer;
