import React from 'react'
import '../login/Login.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function SignUp() {
  const navigate = useNavigate();
  const [data,setData] = useState({
    name: "",
    email:"",
    password:"",
  })

  console.log(data);

  const ChangeHandler = (e) => {
    setData((prev)=>({
      ...prev,
      [e.target.name] : e.target.value,
    }))
  };

  const senderFunction = async() =>{
    const res = await axios.post('http://localhost:8980/user',{
      name:data.name,
      email:data.email,
      password:data.password,
    })
    .catch((error)=>{
      console.log(error);
    })
    const deta = await res.data;
    return deta;
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    senderFunction().then(()=>{
      navigate('/');
    })
  }

  return (
    <div className='login-container'>
    <form onSubmit={handleSubmit} className="form">
  <p className="form-title">Sign Up</p>


  <div className="input-container">
  <input onChange={ChangeHandler} name="name" placeholder="Enter your name" type="text" />
</div>

  <div className="input-container">
    <input onChange={ChangeHandler} name="email" placeholder="Enter email" type="email" />
  </div>

  <div className="input-container">
    <input onChange={ChangeHandler} name="password" placeholder="Enter password" type="password" />
  </div>

  <button className="submit"  type="submit">
    Sign Up
  </button>
  <p className="signup-link">
    Already have an account?
    <Link to="/">Log In</Link>
  </p>
</form>
</div>

  )
}

export default SignUp
