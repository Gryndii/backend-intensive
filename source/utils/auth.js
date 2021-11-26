import { getPassword } from './env';

const password = getPassword();

export const auth = (req, res, next) => {
    const authorization = req.header('authorization');

    if (authorization && authorization === password) {
        next();
    } else {
        res.status(401).json({ message: 'Authentication error' });
    }
};
