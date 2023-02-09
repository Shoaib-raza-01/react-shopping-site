import React from 'react'
import '../Styles/Category.css'
import grocery from '../Images/grocery.webp'
import fashion from '../Images/fashion.webp'
import bikes from '../Images/bikes.webp'
import appliances from '../Images/appliances.webp'
import electronics from '../Images/electronics.webp'
import home from '../Images/home.webp'
import mobile from '../Images/mobile.webp'
import offers from '../Images/offers.webp'
import toy from '../Images/toy.webp'
import travel from '../Images/travel.webp'

function Category() {
  return (
    <div className='container'>
        <div className="imgBox">
        <img src={grocery} alt="grocery_img" />
        <p>
          Grocery
          </p>
        </div>

        <div className="imgBox">
        <img src={fashion} alt="fashion_img" />
        <p>fashion</p>
        </div>

        <div className="imgBox">
        <img src={bikes} alt="bikes_img" />
        <p>bikes</p>
        </div>

        <div className="imgBox">
        <img src={appliances} alt="appliances_img" />
        <p>appliances</p>
        </div>

        <div className="imgBox">
        <img src={electronics} alt="electronics_img" />
        <p>electronics</p>
        </div>

        <div className="imgBox">
        <img src={home} alt="home_img" />
        <p>home</p>
        </div>

        <div className="imgBox">
        <img src={mobile} alt="mobile_img" />
        <p>mobile</p>
        </div>

        <div className="imgBox">
        <img src={offers} alt="offers_img" />
        <p>offers</p>
        </div>

        <div className="imgBox">
        <img src={toy} alt="toy_img" />
        <p>toy</p>
        </div>

        <div className="imgBox">
        <img src={travel} alt="travel_img" />
        <p>travel</p>
        </div>
    </div>
  )
}

export default Category
