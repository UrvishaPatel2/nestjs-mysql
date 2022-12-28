export type createUserParams = {
    username: string;
    password: string;
}

export type UpdateUserParams = {
    username: string;
    password: string;
}

export type CreateUserProfileParams = {
    firstName: string;
    lastName: string;
    age: number;
    dob: string;
}