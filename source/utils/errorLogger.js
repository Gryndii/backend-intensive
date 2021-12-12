import { createLogger, format, transports } from 'winston';
import path from 'path';
const { printf, combine, timestamp } = format;

const logsDestination = path.resolve(path.join('logs', 'errors.log'));

const loggerFormat = printf(({ message, name, timestamp }) => {
    return `${timestamp} ${name}: ${message}`;
});

const winstonLogger = createLogger({
    format: combine(
        timestamp(),
        loggerFormat,
    ),
    level:      'error',
    transports: [
        new transports.File({
            filename: logsDestination,
            level:    'error',
        }),
    ],
});

export const errorLogger = (error, req, res, next) => {
    winstonLogger.error(error);
};
