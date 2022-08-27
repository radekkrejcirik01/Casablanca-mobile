import { PersistStorage } from '@utils/PersistStorage/PersistStorage';
import { PersistStorageKeys } from '@utils/PersistStorage/PersistStorage.enum';
import { setIsDarkMode } from '@store/ThemeReducer';
import store from '@store/index';

class PreloadServiceSingleton {
    loadUserObject = async () => {
        const result = await PersistStorage.getItem(PersistStorageKeys.THEME);
        store.dispatch(setIsDarkMode(result === 'true'));
    };
}

export const PreloadService: PreloadServiceSingleton =
    new PreloadServiceSingleton();
