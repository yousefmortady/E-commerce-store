// importations 

import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './DB/mongoose.js';  // import the function that connect to DB
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authrouter from './routes/Auth-Routes.js';



/////////////////////////////////////////////////////////////////




// config ( starting the server & connecting to db )


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;  // take the port from env file or 3000 if not specified

connectDB(); // call the function to connect to DB

//////////////////////////////////////////////////////////////////

// middlewares ( to parse the request body )

app.use(express.json()); // to parse the json data
app.use(morgan('dev')); // to log the requests in the terminal
app.use(cookieParser()); // to parse the cookies
app.use("/auth",authrouter) // to use the auth routes for any request that start with /auth
app.get("/test" , (req,res) => {
    res.status(200).json()
}
)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); // if every thing is running fine it will show this message in the terminal

  
