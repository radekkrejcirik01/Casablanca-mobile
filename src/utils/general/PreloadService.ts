import { PersistStorage } from '@utils/PersistStorage/PersistStorage';
import { PersistStorageKeys } from '@utils/PersistStorage/PersistStorage.enum';
import { setIsDarkMode } from '@store/ThemeReducer';
import store from '@store/index';
import { setUserStateAction, setUserToken } from '@store/UserReducer';
import { postRequest } from '@utils/Axios/Axios.service';
import {
    SwipeGetInterface,
    SwipeResponseInterface,
    UserGetInterface,
    UserResponseInterface
} from '@models/Registration/Registration.interface';
import THEMES from '@constants/THEMES';

class PreloadServiceSingleton {
    email: string = null;

    distancePreference: number = null;

    agePreference: string = null;

    showMe: number = null;

    filterByTags: number = null;

    tags: Array<string> = null;

    init = async () => {
        const token = await PersistStorage.getItem(PersistStorageKeys.TOKEN);
        this.email = token;
        store.dispatch(setUserToken(token));

        const theme = await PersistStorage.getItem(PersistStorageKeys.THEME);
        store.dispatch(setIsDarkMode(theme === THEMES.DARK));

        this.loadUserObject();
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
                    this.distancePreference = response.data.distancePreference;
                    this.agePreference = response.data.agePreference;
                    this.showMe = response.data.showMe;
                    this.filterByTags = response.data.filterByTags;
                    this.tags = response.data.tags;
                    store.dispatch(setUserStateAction(response.data));

                    this.loadSwipe();
                }
            });
        }
    };

    loadSwipe = () => {
        if (this.email) {
            postRequest<SwipeResponseInterface, SwipeGetInterface>(
                'https://cb5fb5ckol.execute-api.eu-central-1.amazonaws.com/swipe/get',
                {
                    distancePreference: this.distancePreference,
                    agePreference: this.agePreference,
                    showMe: this.showMe,
                    filterByTags: this.filterByTags,
                    tags: this.tags
                }
            ).subscribe((response: SwipeResponseInterface) => {
                if (response?.status) {
                }
            });
        }
    };
}

export const PreloadService: PreloadServiceSingleton =
    new PreloadServiceSingleton();
