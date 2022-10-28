import { GenderSelectEnum } from '@components/registration/GenderSelect/GenderSelect.enum';
import { ShowMeSelectEnum } from '@components/registration/ShowMeSelect/ShowMeSelect.enum';

export interface ReducerProps {
    birthday: Birthday;
    user: User;
    save: Save;
    modal: Modal;
    theme: Theme;
}

export interface User {
    token: string;
    firstname: string;
    email: string;
    birthday: string;
    photos: Array<string>;
    tags: Array<string>;
    gender: GenderSelectEnum;
    showMe: ShowMeSelectEnum;
    password: string;
}

export interface Birthday {
    year: string;
    month: string;
    day: string;
}

export interface Save {
    isVisible: boolean;
}

export interface Modal {
    isModalVisible: boolean;
}

export interface Theme {
    isDarkMode: boolean;
}
