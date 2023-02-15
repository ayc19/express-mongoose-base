import { Schema, model } from 'mongoose';

export interface User {
    name: string;
}

const UserSchema = new Schema<User>({
    name: { type: String, required: true },
});

export const UserModel = model<User>('User', UserSchema);
