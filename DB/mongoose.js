// importations //

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // to access the env variables


export function connectDB() {
    try {
        mongoose.connect(process.env.DB_URL).then(() => {
            console.log('Connected to MongoDB successfully');
        }).catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}  // conect to DB and handle any error
