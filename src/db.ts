import mongoose from 'mongoose';

import { MONGO_CONNECTION_STRING, DB_NAME } from './config';

export async function connectToServer() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(MONGO_CONNECTION_STRING);
        console.log(`Connected to ${DB_NAME} db`);
    } catch (err) {
        console.log(`Error connecting to ${DB_NAME} db`);
        throw err;
    }
}
