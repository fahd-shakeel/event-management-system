import React, { useState } from 'react'
import "./Login.css"
import {useNavigate} from 'react-router-dom';
import axios from "axios"
// import {useCookies} from 'react-cookie';

const Login = () => {
  const product_id = localStorage.getItem('product_id');

  const navigate = useNavigate();
//   const [cookies, setCookie] = useCookies(['token'])
  let [token, setToken] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const login = async()=>{
    await axios.post("http://localhost:3001/login",{email,password})
    .then(res=>{
      // setCookie('user_id',res.data.user_id,{secure:true})
      // setCookie('token',res.data.token,{secure:true})
      navigate("/")
    })
    .catch(err=>alert(err))
  }

  function signup(){
    navigate('/signup')
  }
  function handleSubmit(event){
    event.preventDefault();
  }


  return (
    <div id="login">
      
      <div id="heading">
        <p className="poppins med">Evento</p>
      </div>

      <div id="username-password">
        <form id="form" onSubmit={handleSubmit}>
          <h1 className="poppins semi-bold">Login</h1>
          <div id="username" className='poppins med'>
            <p>Username</p>
            <input type="email" placeholder='example@example.com' onChange={(e)=>setEmail(e.target.value)}></input>
          </div>
          <div id="password" className='poppins med'>
            <p>Password</p>
            <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
          </div>
          <div id="signup-submit">
            <button className="poppins med" onClick={signup}>SignUp</button>
            <button className='poppins med' onClick={login}>Login</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login