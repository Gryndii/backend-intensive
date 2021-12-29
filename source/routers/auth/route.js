import dg from 'debug';

const debug = dg('router:auth');

export const login = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const logout = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const cookieLogin = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        req.session.user = {
            email: req.body.email,
        };
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
