import { createLogger, format, transports } from 'winston';
import path from 'path';
const { printf, combine, timestamp } = format;

export const createErrorLogger = (loggerFormat, destination) => createLogger({
    format: combine(
        timestamp(),
        loggerFormat,
    ),
    level:      'error',
    transports: [
        new transports.File({
            filename: destination,
            level:    'error',
        }),
    ],
});

const loggerFormat = printf(({ message, name, timestamp }) => {
    return `${timestamp} ${name}: ${message}`;
});
const logsDestination = path.resolve(path.join('logs', 'errors.log'));

export const errorLogger = createErrorLogger(
    loggerFormat,
    logsDestination,
);

const notFoundLoggerFormat = printf(({ message, timestamp}) => {
    return `${timestamp} ${message}`;
});
const notFoundLogsDestination = path.resolve(path.join('logs', 'not_found_errors.log'));

export const notFoundLogger = createErrorLogger(
    notFoundLoggerFormat,
    notFoundLogsDestination,
);

const vaidationLoggerFormat = printf(({ message, timestamp }) => {
    return `${timestamp} ${message}`;
});
const vaidationLogsDestination = path.resolve(path.join('logs', 'validation_errors.log'));

export const validationLogger = createErrorLogger(
    vaidationLoggerFormat,
    vaidationLogsDestination,
);

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
