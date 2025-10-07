import express from 'express';
import { register } from "../controller/Auth-Controller.js"; // import the register function from the controller
import { validate } from '../middlewars/Validate.js';
import { registerValidation } from '../services/Auth-Validation.js'; // import the validation schema for registration


const authrouter = express.Router(); // create a router object

authrouter.route("/register").post(validate(registerValidation), register); // route for user registration with validation middleware

export default authrouter; // export the router to use it in other files
