export const NODE_ENV = process.env.NODE_ENV || 'dev';
export const DB_NAME = 'test'; // FILL IN HERE
export const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || `mongodb://127.0.0.1:27017/${DB_NAME}`;
export const PORT = process.env.PORT || 4000;
