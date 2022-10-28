import { configureStore } from '@reduxjs/toolkit';
import BirthdayReducer from '@store/BirthdayReducer';
import UserReducer from '@store/UserReducer';
import SaveReducer from '@store/SaveReducer';
import ModalReducer from '@store/ModalReducer';
import ThemeReducer from '@store/ThemeReducer';

export default configureStore({
    reducer: {
        birthday: BirthdayReducer,
        user: UserReducer,
        save: SaveReducer,
        modal: ModalReducer,
        theme: ThemeReducer
    }
});
