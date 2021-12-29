import { getPassword } from './env';

const password = getPassword();

export const auth = (req, res, next) => {
    const authorization = req.header('authorization');
    const { user } = req.session;

    if (authorization && authorization === password && user.email) {
        next();
    } else {
        res.status(401).json({ message: 'Authentication error' });
    }
};
