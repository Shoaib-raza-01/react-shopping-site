import React from 'react'
import { useLocation } from 'react-router-dom'
import '../Styles/BuyPage.css'

function BuyPage(props) {
  const location = useLocation()
  return (
    <>
      <h2 style={
        {
          marginLeft: '600px',
          marginTop: '20p'
        }
      }>
        Review Checkout Item
      </h2>
      <div className="buyDetails">
        <div className="products">
        <img src={location.state.products.image} style={{
          heightP:'100px',
           width : '100px',
           borderRadius : "10px"
        }} />
        <div className="list">
        <p className='ptitle'>
          {location.state.products.title}
        </p>
        <p style={{
          marginLeft : '45px'
        }}>$ {location.state.products.price}</p>
        </div>
        </div>
        <div className="inputs">
          <input className='addressInputBox' type='text' placeholder='Enter Your Full Name'/>
          <input className='addressInputBox' type='text' placeholder='Enter Your Address'/>
          <input className='addressInputBox' type='text' placeholder='Enter Your Phone Number'/>
        </div>
        <div className="btn">
        <button className="checkout">
          Check Out
        </button>
        </div>
        


      </div>

    </>
  )
}

export default BuyPage
