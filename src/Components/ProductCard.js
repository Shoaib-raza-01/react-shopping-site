import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/ProductCard.css'
import { useCart } from 'react-use-cart'

function ProductPage(props) {
  const addItem = useCart();

  const navigate = useNavigate();
   const handleBuyClick = () => {
      navigate('/buy', {state : {products : props.prodObj}})
   }

  const style = {
    border: "2px solid black",
    borderRadius: "10px",
    height: "wrap-content",
    width: "300px",
    padding: "10px 10px",
    margin: "10px 10px",
  }
  
  return (
    <div style={style}>
      {/* {props.prodObj.title} */}
      <img src={props.prodObj.image} alt="image" width='100px' height='100px' />

      <Link 
      style={{
        textDecoration: "none",
      }} 
      to={`/products/${props.prodObj.id}`}>
        <h3 className='titleProd'>{props.prodObj.title}</h3>
      </Link>
      <p> $ {props.prodObj.price}</p>
      <div className="btns">
        <button className="addToCart" onClick={() => addItem(props.prodObj)}>Add To Cart</button>
        <button className="buyBtn" onClick={handleBuyClick} >Buy Now</button>
      </div>
      

    </div>
  )
}

export default ProductPage
