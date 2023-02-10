import React, { useEffect, useState } from 'react'
import '../Styles/Product.css'
import axios from 'axios'
import logo from '../Images/logo.png'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

function Product() {
  const [productData, setProductData] = useState()
  const [loading, setLoading] = useState(false)
  const param = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`https://fakestoreapi.com/products/${param.id}`).then((response) => {
      setLoading(false)
      setProductData(response.data)
    })
  }, [])

  if (loading) return <div className="loading">
    <img src={logo} className="imageTag" />
  </div>

  return (
    <div>
      {productData && (
        <>
        <Navbar /> 
        <div className='details'>
          <div className="img">
            <img src={productData.image} alt="image" className='prodImage' />
          </div>
          <div className="data">
            <p className='prodTitle'>{productData.title}</p>
            <p className='prodDesc'>{productData.description}</p>
            <p className='prodPrice'>${productData.price}</p>
            <button className="addToCart">Add To Cart</button>
          </div>
        </div>
        </>
      )}
    </div>
  )
}

export default Product
