export const validateStatus = (status) => {
    if (typeof status !== 'number' || status < 100 || status >= 600) {
        throw new Error('Unknown status');
    }
};
