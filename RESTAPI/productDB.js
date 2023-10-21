require("dotenv").config();
const connectedDB = require("./db/connection");
const Product = require("./models/productModel");
const ProductJSON = require("./products.json");

const start = async () =>{
    try{
      await connectedDB(process.env.MONGODB_URL);
      await Product.create(ProductJSON);
      console.log("success")
    }catch(error){
        console.log(error);
    }
}

start();
