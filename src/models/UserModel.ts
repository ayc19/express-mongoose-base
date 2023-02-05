import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

export const UserModel = model('User', UserSchema);