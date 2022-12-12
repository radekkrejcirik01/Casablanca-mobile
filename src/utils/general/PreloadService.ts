import messaging from '@react-native-firebase/messaging';
import { PersistStorage } from '@utils/PersistStorage/PersistStorage';
import { PersistStorageKeys } from '@utils/PersistStorage/PersistStorage.enum';
import { setIsDarkMode } from '@store/ThemeReducer';
import store from '@store/index';
import { setUserStateAction, setUserToken } from '@store/UserReducer';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    UserGetInterface,
    UserResponseInterface
} from '@models/Registration/Registration.interface';
import THEMES from '@constants/THEMES';

class PreloadServiceSingleton {
    email: string = null;

    requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    };

    init = async () => {
        const token = await PersistStorage.getItem(PersistStorageKeys.TOKEN);
        this.email = token;
        store.dispatch(setUserToken(token));

        const theme = await PersistStorage.getItem(PersistStorageKeys.THEME);
        store.dispatch(setIsDarkMode(theme === THEMES.DARK));

        this.loadUserObject();

        await this.requestUserPermission();
    };

    loadUserObject = () => {
        if (this.email) {
            postRequest<UserResponseInterface, UserGetInterface>(
                'https://w2gdfxt8dc.execute-api.eu-central-1.amazonaws.com/user/get',
                {
                    email: this.email
                }
            ).subscribe((response: UserResponseInterface) => {
                if (response?.status) {
                    store.dispatch(setUserStateAction(response.data));
                }
            });
        }
    };
}

export const PreloadService: PreloadServiceSingleton =
    new PreloadServiceSingleton();
