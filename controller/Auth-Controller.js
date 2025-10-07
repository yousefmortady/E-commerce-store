import User from "../models/user-model.js"; // import the user model to interact with the database
import asyncHandler from "express-async-handler"; // to handle async errors in express routes





export const register = asyncHandler(async (req, res) => {  

    const data = req.body; // get the data from the request body

    res.status(200).json(data);

}); // register function to handle the registration logic
