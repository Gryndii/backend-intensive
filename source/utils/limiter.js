import rateLimit from 'express-rate-limit';

export const limiter = (numRequests, resetIn) => rateLimit({
    windowMs: resetIn,
    max:      numRequests,
    headers:  false,
});
