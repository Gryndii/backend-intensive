import { apiLogger } from './logger';

export const apiLoggerMiddleware = (req, res, next) => {
    apiLogger.debug({
        method: req.method,
        body:   req.body,
    });
    next();
};
