import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  let flag = true
  const [user,setUser] = useState()

  const refreshTok =async()=>{
    const response = await axios.get("http://localhost:8980/user/refresh",{
      withCredentials:true
    })
    .catch((error)=>console.log(error))
    console.log(response)
    const data = await response.data
    console.log(data,'test');
    return data
  }

  const passRequest=async()=>{
      const res = await axios.get("http://localhost:8980/user/verify",{
        withCredentials:true,
      }).catch((error)=>{
        console.log(error);
      })
      const data = await res.data
      return data;
  }

  useEffect(()=>{
    if(flag){
      flag = false;
      passRequest().then((data)=>setUser(data))
    }
    let interval = setInterval(()=>{
      refreshTok().then((data)=>setUser(data))
    },1000*29)
    return ()=> clearInterval(interval)
  },[])
  
 console.log(user,'userrr');
  return (
    <div>{user && <h1>{user.user.name}</h1>}</div>
  )
}

export default Home
