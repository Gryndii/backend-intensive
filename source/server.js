// Core
import express from 'express';
import session from 'express-session';

// Instruments
import {
    sessionOptions,
} from './utils';

// Routers

const app = express();

app.use(session(sessionOptions));
app.use(express.json({ limit: '10kb' }));

export { app };
