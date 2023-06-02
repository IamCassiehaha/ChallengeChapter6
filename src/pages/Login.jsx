import React from 'react';
import GoogleButton from 'react-google-button';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../handleUser/UserAuth';
import {useDispatch} from 'react-redux';
import { loginAccount } from '../feature/movie/movieSlice';
import "./Login.scss";

const Login = () => {

  const [email, setEmail] = useState("")

  const [password,setPassword] = useState("")

  const [error, setError] = useState("")

  const navigate = useNavigate()

  const dispatch = useDispatch();


  const dataLogin = {
    "email": email,
    "password": password
  }

  const {googleSignIn}= UserAuth()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError("")
    try{
      await dispatch(loginAccount(dataLogin))
      const isLogin = localStorage.getItem('isLogin');
      const token = localStorage.getItem('token');
      if(isLogin && token){
        navigate("/Home");
      }else{
        alert("check your email and password again!")
      }
      // await logIn(email, password)
    }catch(err){
      setError(err.message)
    }
  }

  const GoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/Home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1 className='judul_login'>LOGIN</h1>
      {error && <alert>{error}</alert>}
      <form 
        onSubmit={handleSubmit}
        className='login'
      >
        <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button id='login_button'>Login</button>
        <GoogleButton onClick={GoogleSignIn} id='google' />
      <p id='belum_punya_akun'>Belum Punya Akun? <Link to='/Register'>Register Disini</Link></p>
      </form>
      
      
    </div>
  )
}

export default Login