import dg from 'debug';
export { getVideoByHash, removeVideoByHash } from './hash';

const debug = dg('router:lessons:lessonHash:videos');

export const createVideo = (req, res) => {
    debug(`${req.method} - ${req.originalUrl}`);

    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
