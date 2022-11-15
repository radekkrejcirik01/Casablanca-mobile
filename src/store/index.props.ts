export interface ReducerProps {
    birthday: Birthday;
    user: User;
    save: Save;
    modal: Modal;
    theme: Theme;
    bottomBar: BottomBar;
}

export interface User {
    token: string;
    firstname: string;
    email: string;
    birthday: string;
    about: string;
    photos: Array<string>;
    tags: Array<string>;
    gender: number;
    showMe: number;
    distance: number;
    filterByTags: number;
    notifications: number;
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

export interface BottomBar {
    isVisible: boolean;
}
