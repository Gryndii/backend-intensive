import { createLogger, format, transports } from 'winston';
const { printf, combine, label, timestamp } = format;

const loggerFormat = printf(({ message, label, timestamp }) => {
    return `
      ${label}:
      ${timestamp}       
      Method - ${message.method}
      Body: - ${JSON.stringify(message.body)}
    `;
});

export const logger = createLogger({
    format: combine(
        label({ label: 'API Request' }),
        timestamp(),
        loggerFormat,
    ),
    level:      'debug',
    transports: [ new transports.Console() ],
});

export const loggerMiddleware = (req, res, next) => {
    logger.debug({
        method: req.method,
        body:   req.body,
    });
    next();
};
