import { configureStore } from '@reduxjs/toolkit';
import BirthdayReducer from '@store/BirthdayReducer';
import UserReducer from '@store/UserReducer';
import SaveReducer from '@store/SaveReducer';
import ModalReducer from '@store/ModalReducer';
import DeviceReducer from '@store/DeviceReducer';
import ThemeReducer from '@store/ThemeReducer';
import BottomBarReducer from '@store/BottomBarReducer';
import SwiperReducer from '@store/SwiperReducer';

export default configureStore({
    reducer: {
        birthday: BirthdayReducer,
        user: UserReducer,
        save: SaveReducer,
        modal: ModalReducer,
        device: DeviceReducer,
        theme: ThemeReducer,
        bottomBar: BottomBarReducer,
        swiper: SwiperReducer
    }
});
