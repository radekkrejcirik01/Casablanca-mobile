export interface ReducerProps {
    birthday: Birthday;
    user: User;
    save: Save;
    modal: Modal;
    device: Device;
    theme: Theme;
    bottomBar: BottomBar;
    swiper: Swiper;
}

export interface User {
    token: string;
    firstname: string;
    email: string;
    birthday: string;
    profilePicture: string;
    about: string;
    photos: Array<string>;
    tags: Array<string>;
    gender: number;
    showMe: number;
    distancePreference: number;
    agePreference: string;
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

export interface Device {
    token: string;
}

export interface Theme {
    isDarkMode: boolean;
}

export interface BottomBar {
    isVisible: boolean;
}

export interface Swiper {
    swipedUsers: Array<string>;
    likedUsers: Array<string>;
}
