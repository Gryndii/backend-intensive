import { Router } from 'express';
import { login, logout } from './route';

export const auth = Router();

auth.post('/login', login);

auth.post('/logout', logout);
