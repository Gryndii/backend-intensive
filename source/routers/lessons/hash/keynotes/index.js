import dg from 'debug';
export { getKeynoteByHash, removeKeynoteByHash } from './hash';

const debug = dg('router:lessons:lessonHash:keynotes');

export const createKeynote = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
