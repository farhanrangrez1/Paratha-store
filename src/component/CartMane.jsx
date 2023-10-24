import React from 'react'
import Cart from './Cart'
import data from '../data/Data'
function CartMane() {


  return (
    <>
 <div className='cartmane' >
    {
    data.biscuits.map(item=><Cart key={item.id} item={item}/>)
    }
 </div>
    </>
  )
}

export default CartMane