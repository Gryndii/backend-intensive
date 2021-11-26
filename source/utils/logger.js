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

const winstonLogger = createLogger({
    format: combine(
        label({ label: 'API Request' }),
        timestamp(),
        loggerFormat,
    ),
    level:      'debug',
    transports: [ new transports.Console() ],
});

export const logger = (req, res, next) => {
    winstonLogger.debug({
        method: req.method,
        body:   req.body,
    });
    next();
};
