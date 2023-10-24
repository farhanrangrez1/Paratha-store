import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../store/slice/cartSlice';
function Aboute() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { image, description, price } = cart.addCart
  const removeData = (id) => {
    dispatch(remove(id))
  }
  return (
    <>
      <div className='box'>
        <div>{
          cart.addCart.map((item) =>
            <div className='aboute-mane'>
              <div className='Aboute'>
                <div className='aboute-mane-1'>
                  <img src={item.image} alt="" />
                </div>
                <div className='aboute-mane-2'>
                  <div className='aboute-1'>
                    <h3>Glytone</h3>
                    <h1>{item.description}</h1>
                    <pre style={{ display: "flex", }}><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i><i class="bi bi-star"></i><h6 style={{ color: "#cf7b12" }}> PRICE ({item.price})       <button style={{ backgroundColor: "#cf7b12", border: "none", height: "30px", width: "130px", color: "white", borderRadius: "10px" }} onClick={() => removeData(item.id)}>Remove</button></h6></pre>
                  </div>
                  <div className='aboute-2'>
                    <h3>Quantiy:</h3>
                    <div className="addbtn">
                      <button
                        className="btn add"
                        onClick={() => {
                          if (count > 1)
                            dispatch(
                              plus({
                                ...cartItem,
                                count: count - 1,
                              })
                            );
                        }}
                      >
                        -
                      </button>

                      {/* <span>{count}</span> */}
                      <button
                        className="btn add"
                        onClick={() =>
                          dispatch(
                            plus({
                              ...cartItem,
                              count: count + 1,
                            })
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className='aboute-7'>
                    <div className='aboute-8'>
                      <h3 style={{ color: "#cf7b12" }}>Description</h3>
                      <li>{item.description}</li>
                    </div>
                    <div className='aboute-9'>
                      {/* <h6>chice Card</h6> */}
                      {/* <h6>Description</h6> */}
                    </div>
                  </div>
                </div></div>

              <div className='aboute-mane-3'>
                <div className='aboute-10'>
                  <h1>Free 2-day delivey</h1>
                </div>
                <div className='aboute-11'>
                  <li>this is a note for showing the<br /> content imside comoonent</li>
                </div>
                <div className='aboute-12'>
                  <h1>Free pickup-loday</h1>
                  <li>im stock at San leandro.<br />15555 Hespenan Bld</li>
                </div>
                <div className='aboute-15'>
                  <a href="https://www.phonepe.com/">  <img src="data:image/png;base64,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" alt="" /></a>
                  <a href="https://paytm.com/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWF9E11pZLR5N4McOWNFSCChbNyb3zc0iPQ&usqp=CAU" alt="" /></a>
                  <a href="https://pay.google.com/about/"><img src="data:image/jpeg;base64,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" alt="" /></a>
                  <a href="https://razorpay.com/support/"><img src="data:image/png;base64,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" alt="" /></a>
                </div>
                <div className='aboute-16'>
                  <Link to={"/YoutubeHome"}> <button><i class="bi bi-bag"></i> Add to cart</button></Link>
                </div>


              </div></div>
          )
        }</div>
      </div>
    </>

  )
}

export default Aboute