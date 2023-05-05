import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserAuth } from '../handleUser/UserAuth';
import "./Register.scss";


const Register = () => {

  const [email, setEmail] = useState("")
  
  const [password, setPassword] = useState("")
  
  const [error, setError] = useState("")
  
  const navigate = useNavigate()
  
  const {signUp}= UserAuth()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError("")
    try{
      await signUp(email, password)
      navigate("/")
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
        <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button id='register_button'>Register</button>
        <p id='sudah_punya_akun'>Sudah Punya Akun <Link to='/'>Login Disini</Link></p>
      </form>
    </div>
  )
}

export default Register