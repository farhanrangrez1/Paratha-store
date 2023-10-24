import React from 'react'
import { add } from '../store/slice/cartSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Cart({item}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {image,description,price}=item
   const handleAdd=(item)=>{
     dispatch(add(item))
     navigate("/Aboute")
   }
  return (
    // data-aos="fade-right"
   <div  className='card-1'  onClick={()=>handleAdd(item)}  >
     <div className="card" >
    <img src={image} className="card-img-top" alt="..." />
    <h2>{price}</h2>
    <div className="card-body">
    <h5 className="card-text">{description}</h5>
    </div>
    <div className='btn-1 d-flex justify-content-center '>
     <a href="#" className="btn  ms-auto ms-5" onClick={()=>handleAdd(item)}>Add to Cart</a>
     </div>
  </div>
   </div>
  )
}

export default Cart