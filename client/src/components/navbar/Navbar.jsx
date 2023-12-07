import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {Link, Outlet} from 'react-router-dom';
import './Navbar.css'
import { authActions } from '../../Store';
import { useDispatch } from 'react-redux';



const Navbar = ()=> {
  const [value,setValue] = useState();
  const dispatch = useDispatch()

  const isLoggedIn = useSelector((state)=>state.isLoggedIn);

  const onRequestSender = async()=>{
    const response = await axios.post("http://localhost:8980/user/logout",null,{
      withCredentials: true,
    });
    if(response == 200){
      return response;
    }
    return new Error("Something went wrong")
  }


const logoutHandler = ()=>{
  onRequestSender().then(()=> dispatch(authActions.logout()))
};

  return (
    <div>
    <div className='navbar'>
    <div className="links">
        <Link to="/">Login</Link>
        <Link to="/up">SignUp</Link>
        {
          isLoggedIn &&
          
          <Link onClick={logoutHandler} >Logout</Link>
        }
        
    </div>

</div>
<Outlet />
</div>
  )
}

export default Navbar
