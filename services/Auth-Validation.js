import Joi from "joi";

export let registerValidation =   Joi.object({
    firstname : Joi.string().min(3).max(30).required(),
    lastname : Joi.string().min(3).max(30).required(),
    username : Joi.string().min(3).max(50).optional(),
    email : Joi.string().email().required(),
    password : Joi.string().min(6).max(30).required(),
    profileimage : Joi.string().required(),
    role : Joi.string().optional()
});

