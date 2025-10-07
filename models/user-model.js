
import mongoose from "mongoose"; // import mongoose to create the schema and model

const usermodel = new mongoose.Schema({

    firstname : {
        type : "string",
        trim : "true"
    },

    lastname : {
        type : "string",
        trim : "true"
    },

    username : {
        type : "string",
        trim : "true"
    },

    email : {
         type : "string",
        trim : "true",
        unique : "true"
    },

    password : {
         type : "string",
        trim : "true"
    },

    profileimage : {
        type : "string",
    },

    role : {
        type : "string",
        enum : ["user" , "admin"],
        default : "user"
    }

},{
    timestamps : true, // to know when the user is created or updated
    collection : "User" // name of the collection in the database
}
)


const User = mongoose.model('User' , usermodel); // create the model

export default User; // export the model to use it in other files