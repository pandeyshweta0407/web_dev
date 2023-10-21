import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

  const handleFrom = (e)=>{
    //console.log(e);
    console.log(e.target.value , e.target.name);
    setForm({...form,[e.target.name] : e.target.value});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:8080/demo",{
      method:'POST', 
      body:JSON.stringify(form),
      headers:{
        'Content-Type' : 'application/json'
      }
    })

    const data = await response.text();

    //console.log(e.target.value);
    // console.log(form);
    // console.log(response);
    console.log(data);
  }

  const getUsers = async (e) =>{
    const response = await fetch("http://localhost:8080/demo",{
      method:'GET', 
    })

    const data = await response.json();
    // console.log(data);
    setUsers(data);
  }

    useEffect(()=>{
     getUsers();
    },[]);




  return (
    <div>
       {/* <p>{JSON.stringify(form)}</p> */}
      <form  onSubmit={handleSubmit}>
        <span>username</span>
        <input type='text' name='username'  onChange={handleFrom} />
        <span>password</span>
        <input type='text' name='password'  onChange={handleFrom}  />
        <input type='submit' />
      </form>
      <div>
      <ul>{ users.map(user => <li key={user._id} >{user.username},{user.password}</li>) }</ul>  
      </div>

    </div>
  );
}

export default App;
