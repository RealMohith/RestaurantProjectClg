require ('dotenv').config();
const mongoose = require("mongoose");
mongo_string = process.env.MONGODB_URL;
mongoose.connect(mongo_string);
const db = mongoose.connection;

db.on(
    "error",
    (err)=>{
        console.error(err);
        process.exit();
    }
);

db.on(
    "open",
    ()=>{
        console.log("Connected to MongoDB");
        }
);



module.exports = db;