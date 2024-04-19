import express from 'express';
import routes from './routes/index.mjs';

export function initializeApp() {
    const app = express();

    app.use(routes);

    return app;
}