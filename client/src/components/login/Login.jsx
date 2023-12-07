import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [data,setData] = useState({
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
    const res = await axios.post('http://localhost:8980/user/login',{
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
      navigate('/home');
    })
  }

  return (
    <div className='login-container'>
    <form className="form" onSubmit={handleSubmit}>
  <p className="form-title">Login in to your account</p>

  
  <div className="input-container">
    <input placeholder="Enter email" onChange={ChangeHandler} name='email' type="email" />
    <span>
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </span>
  </div>
  <div className="input-container">
    <input placeholder="Enter password" onChange={ChangeHandler} name='password' type="password" />
    <span>
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </span>
  </div>
  <button className="submit" type="submit">
    Log In
  </button>
  <p className="signup-link">
    No account?
    <Link to='/up'>Sign up</Link>
  </p>
</form>
</div>

  )
}

export default Login
