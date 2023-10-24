import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
 <>
 <Link to={"/Ragister"}><button style={{marginBottom:"30px",marginLeft:"550px",height:"50px",width:"300px",backgroundColor:"#cf7b12",color:"white",border:"none",borderRadius:"20px"}}>Login ....</button></Link>
 </>
    )
}

export default Login