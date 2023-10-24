import React, { useEffect } from 'react'
import A from "../images/A.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOuteUser } from '../store/slice/cartSlice';

function Navbar() {

  const navigate=useNavigate()
  const dispatch=useDispatch()
const bgchange = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    const navbar = document.querySelector('.navbar-mane')
    navbar.style.backgroundColor = navbar.style.backgroundColor==='white' ? 'black' : 'white'
  }
 const buttonClick = () => {
    bgchange()
  }
  const cart=useSelector(state=>state.cart)
  const {user}=useSelector(state=>state.cart)
 const handleLogout=()=>{
  dispatch(logOuteUser())
  navigate("/Ragister")
  // console.log("farhan");
 }
  
  return (
    <div className='navbar-mane navbar-mane1 navbar-mane2' >
      <div className='nave-1'>
        <div className='nave-2'>
        <Link className='link' to="/YoutubeHome"><h4 style={{color:"#cf7b12"}}> Home</h4></Link>
        <Link className='link' to='/YoutubeVideos'><h4 style={{color:"#cf7b12"}}>Videos</h4></Link>
        <Link className='link' to='/YoutubeAbout'><h4 style={{color:"#cf7b12"}}>About</h4></Link>
          <h5 style={{color:"#cf7b12"}} className='color-chg'>STORIES</h5>
        </div>
     <Link to={"/Home"}><div className='nave-3'>
          <img src={A} alt="" />
        </div></Link>
      </div>

      <div className='nave-4'>
        <div className='nave-5'>
          <label className="switch">
            <input className='color-chg' type="checkbox" onClick={buttonClick} />
            <span className="slider round"></span>
          </label>
        </div>
       <Link  to={"/Aboute"}><div className='nave-6'>
          <button>{cart.length} Cart</button>
        </div></Link>

        <div className='nave-7'>
        <button onClick={handleLogout}>Logout</button>
        <h2><i  className="bi bi-person-fill"></i></h2>
         <h3><i  className="bi bi-globe"></i></h3>

         </div>
      </div>
    </div>
  )
}

export default Navbar