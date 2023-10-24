// import {FaUser} from 'react-icons/fa'

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { register } from "../store/slice/cartSlice"
import { useNavigate } from "react-router-dom"

function Ragister() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {user, isLoading,isError,isSiccess,message}=useSelector(state=>state.cart)
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    password2:"",
  })
  const {name,email,password,password2}=formData
  const handleChange=(e)=>{
    setFormData(
      {
        ...formData,
        [e.target.name]:e.target.value
      }
    )
  }
 const handleSubmite=(e)=>{
    e.preventDefault()
   if(password !== password2){
    toast.error("Password Not match")
   }
  dispatch(register(formData))
  navigate("/Home") 
  }
  useEffect(()=>{
  
  },[user,isLoading,isError,isSiccess,message])
  return (
  <>
    <section class='heading'>
            <h1>Login <i class="bi bi-person-fill"></i></h1>
            <p>Please create an account</p>
          </section>
    
          <section class='form'>
            <form onSubmit={handleSubmite}>
              <div class='form-group'>
                <input
                  type='text'
                  class='form-control'
                  id='name'
                  name='name'
                  onChange={handleChange}
                  value={name}
                  placeholder='Enter your name'
                  required
                />
              </div>
              <div class='form-group'>
                <input
                  type='email'
                  class='form-control'
                  id='email'
                  name='email'
                  onChange={handleChange}
                  value={email}
                placeholder='Enter your email'
                  required
                />
              </div>
              <div class='form-group'>
                <input
                  type='password'
                  class='form-control'
                  id='password'
                  name='password'
                  onChange={handleChange}
                  value={password}
                  placeholder='Enter password'
                  required
                />
              </div>
              <div class='form-group'>
                <input
                  type='password'
                  class='form-control'
                  id='password2'
                  name='password2'
                  onChange={handleChange}
                  value={password2}
                  placeholder='Confirm password'
                  required
                />
              </div>
              <div class='form-group'>
                <button class='btn btn-block'>Submit</button>
              </div>
            </form>
          </section></>
  )
}



export default Ragister