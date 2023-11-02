import React, { useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser]= useState({
    name:"",email:"", phone:"" , work:"" , password:"" , cpassword:"" 
  });

  let name , value;
  const handleInput= (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user , [name] : value});
  }

  const postData = async (e)=>{
    e.preventDefault();
    const {name,email, phone , work , password , cpassword  } = user;
   
    const res = await fetch("http://localhost:5000/register" , {
      method:"POST",
      headers:{"Content-Type" : "application/json"},
      body:JSON.stringify({name,email, phone, work, password , cpassword})
    })

    const data = await res.json();
  
    if(data.status === 422 || !data){
      console.log("Invalid Registration");
    }else{
      console.log("Registration  Successfull");
      navigate.push("/login");
    }
  }



  return (
    <div className="signup">
      <div className="signup-container">
        <div className="title">signup</div>
        <div className="input">
          <input
            type="text"
            name="name"
            className="form-submit"
            placeholder="Your name"
            value={user.name}
            onChange={(e) =>{handleInput(e)}}
          />
          <input
            type="email"
            name="email"
            className="form-submit"
            placeholder="Your email"
            value={user.email}
            onChange={(e) =>{handleInput(e)}}
          />
          <input
            type="number"
            name="phone"
            className="form-submit"
            placeholder="Your Phone"
            value={user.phone}
            onChange={(e) =>{handleInput(e)}}
          />
          <input
            type="text"
            name="work"
            className="form-submit"
            placeholder="Your Profession"
            value={user.work}
            onChange={(e) =>{handleInput(e)}}
          />
          <input
            type="password"
            name="password"
            className="form-submit"
            placeholder="Your Password" 
            value={user.password}
            onChange={(e) =>{handleInput(e)}}
          />
          <input
            type="password"
            name="cpassword"
            className="form-submit"
            placeholder="Confirm Your Password"
            value={user.cpassword}
            onChange={(e) =>{handleInput(e)}}
          />
          <input
            type="submit"
            name="signup"
            className="form-submit"
            placeholder="Signup"
            value="register"
            onClick={(e)=>{postData(e)}}       
          />
          <div>
            have account? <NavLink to="/login">Login in</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
