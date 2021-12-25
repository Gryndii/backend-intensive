import { errorLogger, notFoundLogger, validationLogger } from './loggers';

export const errorLoggerMiddleware = (error, req, res, next) => {
    switch (error.name) {
        case 'ValidationError':
            validationLogger.error(
                `${req.method}: ${req.url} ['${error.message}'] ${JSON.stringify(req.body)}`,
            );
            break;
        case 'NotFoundError':
            notFoundLogger.error(
                `${req.method}: ${req.url}`,
            );
            break;
        default:
            errorLogger.error(error);
    }
};
