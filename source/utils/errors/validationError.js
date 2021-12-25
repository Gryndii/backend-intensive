import { validateStatus } from '../statusValidator';

export class ValidationError extends Error {
    constructor(message, statusCode = 400, ...rest) {
        super(message, ...rest);

        validateStatus(statusCode);
        Error.captureStackTrace(this, ValidationError);

        this.name = 'ValidationError';
        this.statusCode = statusCode;
    }
}
