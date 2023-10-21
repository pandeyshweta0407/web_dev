const mongoose = require("mongoose");

const connectDB = (uri) =>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("connected db");
    }).catch((error)=>{console.log(error)});
}

module.exports = connectDB;