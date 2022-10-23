export interface ResponseInterface {
    status: string;
    message: string;
    data: {
        id: number;
        email: string;
    };
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
