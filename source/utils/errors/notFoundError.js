import { validateStatus } from './validateStatus';

export class NotFoundError extends Error {
    constructor(message, statusCode = 400, ...rest) {
        super(message, ...rest);

        validateStatus(statusCode);
        Error.captureStackTrace(this, NotFoundError);

        this.name = 'NotFoundError';
        this.statusCode = statusCode;
    }
}
