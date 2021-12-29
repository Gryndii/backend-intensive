import { Router } from 'express';
import { cookieLogin, login, logout } from './route';
import { auth, validator } from '../../utils';

// Schema
import { authByCookie } from '../../schemas';

export const router = Router();

router.post('/login', login);
router.post('/logout', [ auth ], logout);
router.post('/api/auth/login', [ validator(authByCookie, 401) ], cookieLogin);

export { router as auth };
