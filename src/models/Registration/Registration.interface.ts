export interface ResponseInterface {
    status: string;
    message: string;
}

export interface RegistrationInterface {
    firstname: string;
    birthday: string;
    tags: Array<string>;
    photos: Array<string>;
    gender: string;
    showMe: string;
    email: string;
    password: string;
}

export interface LoginInterface {
    email: string;
    password: string;
}

export interface UserGetInterface {
    email: string;
}

export interface UserResponseInterface {
    status: string;
    message: string;
    data?: {
        email: string;
        firstname: string;
        birthday: string;
        photos: Array<string>;
        tags: Array<string>;
        gender: string;
        showme: string;
    };
}
