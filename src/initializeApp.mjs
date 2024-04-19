import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/index.mjs';

export function initializeApp() {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log('Connected to database successfully'))
        .catch((err) => console.log(`Error connecting to database: ${err}`));

    const app = express();

    app.use(express.json());
    app.use(cors())

    app.use(routes);

    return app;
}