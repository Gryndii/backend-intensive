import Ajv from 'ajv';

export const validator = (schema, errorStatus = 400) => (req, res, next) => {
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(schema);

    const valid = validate(req.body);

    if (valid) {
        return next();
    }

    const errors = validate.errors.map(({ message }) => message).join(', ');

    res.status(errorStatus).json({ message: errors });
};
