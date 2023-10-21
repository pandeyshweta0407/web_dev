const Product  = require("../models/productModel");

const getAllProducts = async (req , res)=>{
  // res.status(200).json({msg:"i am getAllProducts"});
  const myData = await Product.find({});
  res.status(200).json({myData});
};

const getAllProductsTesting = async (req , res)=>{
    res.status(200).json({msg:"i am getAllProductsTesting"});
  };

module.exports = {getAllProducts , getAllProductsTesting};  