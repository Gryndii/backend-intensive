// Core
import express from 'express';
import session from 'express-session';

// Instruments
import {
    sessionOptions,
} from './utils';

// Routers
import { auth, users, classes, lessons } from './routers';

const app = express();

app.use(session(sessionOptions));
app.use(express.json({ limit: '10kb' }));

app.use('/', auth);
app.use('/users', users);
app.use('/classes', classes);
app.use('/lessons', lessons);

export { app };
