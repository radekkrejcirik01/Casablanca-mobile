import { PersistStorage } from '@utils/PersistStorage/PersistStorage';
import { PersistStorageKeys } from '@utils/PersistStorage/PersistStorage.enum';
import { setIsDarkMode } from '@store/ThemeReducer';
import store from '@store/index';
import { setUserToken } from '@store/UserReducer';

class PreloadServiceSingleton {
    loadUserObject = async () => {
        const token = await PersistStorage.getItem(PersistStorageKeys.TOKEN);
        store.dispatch(setUserToken(token));

        const theme = await PersistStorage.getItem(PersistStorageKeys.THEME);
        store.dispatch(setIsDarkMode(theme === 'dark'));
    };
}

export const PreloadService: PreloadServiceSingleton =
    new PreloadServiceSingleton();
