import dg from 'debug';

const debug = dg('router:classes:hash');

export const getByHash = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    const data = {};

    try {
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateByHash = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    const data = { hash: '' };

    try {
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const removeByHash = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

