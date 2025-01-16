import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
import axios from "axios"

const Signup = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function login(){
    navigate('/login')
  }

  const submit= async()=>{
    if(confirmPassword !== password){
      alert("Check confirm password again!")
    }
    else{
        await axios.post("http://localhost:3001/signup",{"email":email,"password":password})
        .then(res=>{
          alert(res.data)
          navigate('/login')
        })
        .catch(err=>alert(err))
        
    }
    
  }

  function handleSubmit(event){
    event.preventDefault()

  }
  return (
    <div id="signup">
      <div id="heading">
        <p className="poppins med">Evento</p>
      </div>

      <div id="username-password">
        <form id="form" onSubmit={handleSubmit}>
          <h1 className="poppins semi-bold">Signup</h1>
          <div id="username" className='poppins med'>
            <p>Email</p>
            <input type="email" placeholder='example@example.com' onChange={(e)=>{setEmail(e.target.value)}}></input>
          </div>
          <div id="password" className='poppins med'>
            <p>Password</p>
            <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
          </div>
          <div id="password" className='poppins med'>
            <p>Confirm Password</p>
            <input type="password" placeholder="confirm password" onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
          </div>
          <div id="signup-submit">
            <button className="poppins med" onClick={login}>Login</button>
            <button className='poppins med' onClick={submit}>Signup</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Signup