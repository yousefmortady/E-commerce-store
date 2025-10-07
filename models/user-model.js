
import mongoose from "mongoose"; // import mongoose to create the schema and model

const usermodel = new mongoose.Schema({

    firstname : {
        type : String,
        trim : true,
    },

    lastname : {
        type : String,
        trim : true,
    },

    username : {
        type : String,
        trim : true,
    },

    email : {
        type : String,
        trim : true,
        unique : true,
    },

    password : {
        type : String,
        trim : true,
    },

    profileimage : {
        type : String,
    },

    role : {
        type : String,
        enum : ["user" , "admin"],
        default : "user"
    }

},{
    timestamps : true, // to know when the user is created or updated
    collection : "user" // name of the collection in the database
}
)


const User = mongoose.model('User' , usermodel); // create the model

export default User; // export the model to use it in other files