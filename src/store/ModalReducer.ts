import { createSlice } from '@reduxjs/toolkit';
import { Modal } from '@store/index.props';

const initialState: Modal = {
    isModalVisible: false
};

export const ModalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalVisible: (state, action) => {
            state.isModalVisible = action.payload;
        }
    }
});

export const { setModalVisible } = ModalReducer.actions;

export default ModalReducer.reducer;
