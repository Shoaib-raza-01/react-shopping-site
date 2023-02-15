import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../Images/notFoundPage.jpg';
import '../Styles/BuyPage.css';

function NotFoundPage() {
  return (
    <div>
      <div className="notfoundImg">
        <img src={notFoundImage} />
        <p id='warning'>
          The page you are trying to visit seems like it doesn't exist. 
        </p>
        <p className="backToHomePage">
          <Link to='/'>Go To HomePage</Link>
        </p>
      </div>
    </div>
  )
}

export default NotFoundPage
