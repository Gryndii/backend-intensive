// Core
import express from 'express';
import session from 'express-session';

// Instruments
import {
    sessionOptions,
} from './utils';
import {
    apiLoggerMiddleware,
    errorLoggerMiddleware,
} from './utils/loggers';
import { NotFoundError } from './utils/errors';

// Routers
import { auth, users, classes, lessons } from './routers';

const app = express();

const middlewares = [
    session(sessionOptions),
    express.json({ limit: '10kb' }),
    express.urlencoded(),
];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(apiLoggerMiddleware);
}

app.use(middlewares);

app.use('/', auth);
app.use('/users', users);
app.use('/classes', classes);
app.use('/lessons', lessons);

app.use('/*', (req, res, next) => {
    next(
        new NotFoundError(
            `Unknown endpoint: "${req.baseUrl}", method: "${req.method}"`,
            404,
        ),
    );
});

if (process.env.NODE_ENV !== 'test') {
    app.use(errorLoggerMiddleware);
}

export { app };
