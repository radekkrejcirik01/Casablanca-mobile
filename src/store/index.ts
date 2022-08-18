import { configureStore } from '@reduxjs/toolkit';
import RegistrationReducer from '@store/RegistrationReducer';
import UserReducer from '@store/UserReducer';
import SaveReducer from '@store/SaveReducer';
import ModalReducer from '@store/ModalReducer';

export default configureStore({
    reducer: {
        user: UserReducer,
        registration: RegistrationReducer,
        save: SaveReducer,
        modal: ModalReducer
    }
});
