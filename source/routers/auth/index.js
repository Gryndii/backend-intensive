import { Router } from 'express';
import { login, logout } from './route';
import { auth } from '../../utils';

export const router = Router();

router.post('/login', login);
router.post('/logout', [ auth ], logout);

export { router as auth };
