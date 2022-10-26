import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '@store/UserReducer';
import SaveReducer from '@store/SaveReducer';
import ModalReducer from '@store/ModalReducer';
import ThemeReducer from '@store/ThemeReducer';

export default configureStore({
    reducer: {
        user: UserReducer,
        save: SaveReducer,
        modal: ModalReducer,
        theme: ThemeReducer
    }
});
