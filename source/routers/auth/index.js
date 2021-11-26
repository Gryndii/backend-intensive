import { Router } from 'express';
import { login, logout } from './route';

export const router = Router();

router.post('/login', login);
router.post('/logout', logout);

export { router as auth };
