import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Styles/HomePage.css'
import Category from './Category'
import Navbar from './Navbar'
import { useCart } from 'react-use-cart'
import ProductPage from './ProductCard'

function HomePage() {

  const [products, setProducts] = useState([])

  const cartItem = useCart();
  
  const categoryOfProd = (QUERY) =>{
    axios.get(
      QUERY === "" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${QUERY}`
    ).then((response) => {
      console.log(response)
      setProducts(response.data)
    } )
  }
  
 useEffect(() => {
 axios.get("https://fakestoreapi.com/products").then((response)=>{
    setProducts(response.data)
 })
 }, [])
  return (
    <>
     <Navbar categoryOfProd = {categoryOfProd}/>
     <div className="category"><Category /></div>
     <div style={{display : "flex", flexWrap : "wrap", justifyContent: "center" }}>
      {products.map((product)=>{
     return <ProductPage key = {product.id} prodObj = {product}/>
     })}</div>
    </>
  )
}

export default HomePage
