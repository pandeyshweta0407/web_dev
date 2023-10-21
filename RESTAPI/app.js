require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connection"); 

const PORT = process.env.PORT || 5000;

const products = require("./routes/products");

app.get("/" , (req,res)=>{
   res.send("hi, I am live")
});


// middleware or to set router
app.use("/api/products" , products);


const start = async () =>{
   try{
      app.listen(PORT , () =>{
       console.log(`servere is started at ${PORT}`)
      });
      await connectDB(process.env.MONGODB_URL);
   }catch(error){
        console.log(error);
   }
}

start(); 

