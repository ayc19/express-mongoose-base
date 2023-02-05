import { UserModel } from '../models/UserModel';
import { User } from '../types/users';

export async function createUser() {
    const newUser = new UserModel<User>({
        email: 'fake email',
    });
    await newUser.save();
}

export async function getUser() {
    const fakeUser = {
        email: 'fake email',
        name: 'Chalex An',
    };
    return fakeUser;
}
