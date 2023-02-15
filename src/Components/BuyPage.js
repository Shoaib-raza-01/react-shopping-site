import React from 'react'
import { useLocation } from 'react-router-dom'
import '../Styles/BuyPage.css'
import Navbar from './Navbar';

function BuyPage() {
  const location = useLocation();
  let name, address, number;
const nameHandler = (event)=>{
  name = event.target.value;
}
const addressHandler = (event)=>{
  address = event.target.value;
}
const numberhandler = (event)=>{
  number = event.target.value;
}

  const handleCheckout = () =>{
    if(name === undefined || address === undefined || number === undefined){
      alert("please fill all details carefully")
    }else{
          alert("Your order was confirmed and placed for: " + name + "\nAddress :" + address + "\nnumber : " +number)
    }
  }
  return (
    <>
      <Navbar />
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
          <input className='addressInputBox' type='text' onChange={nameHandler} placeholder='Enter Your Full Name'/>
          <input className='addressInputBox' type='text' onChange={addressHandler} placeholder='Enter Your Address'/>
          <input className='addressInputBox' type='text' onChange={numberhandler} placeholder='Enter Your Phone Number'/>
        </div>
        <div className="btn">
        <button className="checkout" onClick={handleCheckout}>
          Check Out
        </button>
        </div>
        


      </div>

    </>
  )
}

export default BuyPage
