import dg from 'debug';

const debug = dg('router:lessons');

export const get = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    const data = [];

    try {
        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const create = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    const data = { hash: '' };

    try {
        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

