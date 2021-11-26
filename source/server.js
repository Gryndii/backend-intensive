// Core
import express from 'express';
import session from 'express-session';

// Instruments
import {
    sessionOptions,
    logger,
} from './utils';

// Routers
import { auth, users, classes, lessons } from './routers';

const app = express();

const middleware = [
    session(sessionOptions),
    express.json({ limit: '10kb' }),
];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

app.use(middleware);

app.use('/', auth);
app.use('/users', users);
app.use('/classes', classes);
app.use('/lessons', lessons);

export { app };
