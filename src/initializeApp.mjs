import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/index.mjs';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
import "./strategies/local-strategy.mjs";

export function initializeApp() {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log('Connected to database successfully'))
        .catch((err) => console.log(`Error connecting to database: ${err}`));

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(cookieParser(process.env.COOKIE_SECRET));
    app.use(session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: Number(process.env.SESSION_EXPIRATION_MS),
        }
    }))
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(routes);

    return app;
}