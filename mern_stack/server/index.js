const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({path:'./config.env'});
require("./db/conn");
const cors = require("cors");
const User = require('./models/userSchema');

app.use(cors);
app.use(express.json());

app.use(require('./router/auth'))

const PORT = process.env.PORT || 5000;

app.get("/" , (req , res)=>{
    res.send("hello from server");
})

app.get("/about " , (req , res)=>{
    res.send("hello about  from server");
})

app.get("/contact" , (req , res)=>{
    res.cookie("test" , 'shweta');
    res.send("hello contact from server");
})

app.listen(PORT ,()=>{
    console.log(`server is running at port ${PORT}`);
} )

