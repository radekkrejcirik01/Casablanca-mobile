import { configureStore } from '@reduxjs/toolkit';
import RegistrationReducer from '@store/RegistrationReducer';
import UserReducer from '@store/UserReducer';

export default configureStore({
    reducer: {
        user: UserReducer,
        registration: RegistrationReducer
    }
});
