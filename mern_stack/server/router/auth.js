require('../db/conn');
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs")

const express = require('express');
const router = express.Router();


router.get('/' , (req,res)=>{
    res.send(`hello from router`);
})

// using promises
// router.post('/register' , (req,res)=>{
//     //console.log(req.body);
//     // console.log(req.body.name);
//     // console.log(req.body.email);
//     // res.json({message: req.body});
//    //  res.send(`hello from register`);


//    const { name,email,phone,work,password,cpassword } = req.body;
  
//    if( !name || !email || !phone || !work || !password || !cpassword ){
//        return res.status(422).json({error: "Plz fill the data"})
//    }

//    // 1st email database ka hai 2nd eamil
//    // ye purs wala hai matlab req.body ka 
//    User.findOne({email : email}
//     ).then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//         }

//     // const user = new User ({name: name,email:email,phone:phone
//     // ,work:work,password: password,cpassword:cpassword});   or 
    
//     const user = new User ({name,email,phone,work,password,cpassword});

//     user.save().then(()=>{
//          res.status(201).json({message:"user registered successfully"});
//     }).catch((err)=>{
//         res.status(500).json({ error :"failed to register"});
//     })
//     }).catch((err)=>{ console.log(err)})
// });



router.post('/register' , async (req,res) => {
    const { name,email,phone,work,password,cpassword } = req.body;
    if( !name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({error: "Plz fill the data"})
    }
   try{
   
    const userExist = await User.findOne({email : email});
    if(userExist){
        return res.status(422).json({error: "Email already exist"});
    }else if(password != cpassword){
        return res.status(422).json({error: "passwords are not matching"});
    }else{
        const user = new User ({name,email,phone,work,password,cpassword});
        await user.save();
        res.status(201).json({message:"user registered successfully"});
    } 
   }catch(err){
     console.log(err)
   }
   
});


router.post('/signin' , async (req,res) => {
    try{
    const { email,password } = req.body;
        if( !email || !password  ){
            return res.status(400).json({error: "Plz fill the data"})
        }   
     const userLogin = await User.findOne({email : email});
   

     if( userLogin){
        const isMatch = await bcrypt.compare(password , userLogin.password);
        const token =  await userLogin.generateAuthToken(); 
        console.log(token);
        res.cookie("jwtToken" , token, {
            expires:new Date(Date.now + 25892000000),
            httpOnly:true
        })

         if(!isMatch){
            res.status(400).json({ error:"Invalid Credientials"});  
         }else{
            res.status(201).json({message:"user signin successfully"});
         }
     }else{
        res.status(400).json({ error:"Invalid Credientials"}); 
     }

   
    }catch(err){
      console.log(err)
    }
 });
 



module.exports = router;