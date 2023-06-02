import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { registerAccount } from '../feature/movie/movieSlice';
import "./Register.scss";


const Register = () => {

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")
  
  const [password, setPassword] = useState("")
  
  const [error, setError] = useState("")

  const dataRegister = {
    "name": name,
    "email": email,
    "password": password
  }

  const dispatch = useDispatch();
  
  const navigate = useNavigate()
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    setError("")
    try{
      await dispatch(registerAccount(dataRegister))
      const isLogin = localStorage.getItem('isLogin');
      const token = localStorage.getItem('token');
      if(isLogin && token){
        navigate("/Home")
      }else{
        navigate("/Register")
      }
      const error = localStorage.getItem('error');
      if(error){
        alert(error)
        localStorage.removeItem('error')
      }
      // await signUp(email, password)
      // navigate("/")
    }catch(err){
      setError(err.message)
    }
  }

  return (
    <div>
      <h1 className='judul_register'>REGISTER</h1>
      {error && <alert>{error}</alert>}
      <form 
        onSubmit={handleSubmit}
        className='register'
      >
        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button id='register_button'>Register</button>
        <p id='sudah_punya_akun'>Sudah Punya Akun <Link to='/'>Login Disini</Link></p>
      </form>
    </div>
  )
}

export default Register