import { GenderSelectEnum } from '@components/registration/GenderSelect/GenderSelect.enum';
import { WhoShowSelectEnum } from '@components/registration/WhoShowSelect/WhoShowSelect.enum';

export interface ReducerProps {
    user: {
        token: string;
    };
    registration: {
        firstname: string;
        email: string;
        birthday: Birthday;
        photos: Array<string>;
        tags: Array<string>;
        gender: GenderSelectEnum;
        whoShow: WhoShowSelectEnum;
        password: string;
    };
    save: {
        isVisible: boolean;
    };
    modal: {
        isModalVisible: boolean;
    };
    theme: {
        isDarkMode: boolean;
    };
}

export interface Birthday {
    year: string;
    month: string;
    day: string;
}
