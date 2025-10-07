import { Schema } from "mongoose";

export const validate = (schema) => {
    return (req, res, next) => {
        console.log("Validating request body:", req.body); // Debugging line to check the request body

        const inputs = { ...req.body, ...req.params, ...req.query }; // get the data from the request body

        const { error } = schema.validate(inputs, { abortEarly: false }); // validate the data against the schema and the abortEarly option to get all the errors

        if (error) {
            const error = error.details.map((item) => ({
                message: item.message,
                field: item.path.join('.')

            }))
        }
        next()
    }
}
