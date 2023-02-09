import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Styles/HomePage.css'
import Category from './Category'
import Navbar from './Navbar'
import ProductPage from './ProductCard'

function HomePage() {
  const [products, setProducts] = useState([])
 useEffect(() => {
 axios.get("https://fakestoreapi.com/products").then((response)=>{
    setProducts(response.data)
 })
 }, [])
  return (
    <>
     <Navbar />
     <div className="category"><Category /></div>
     <div style={{display : "flex", flexWrap : "wrap", justifyContent: "center" }}>
      {products.map((product)=>{
     return <ProductPage key = {product.id} prodObj = {product}/>
     })}</div>
    </>
  )
}

export default HomePage
