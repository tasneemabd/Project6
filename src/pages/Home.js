import React, { useState } from 'react'
import { paintings } from '../componant/Paintings';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
const Home = () => {
 
   
  const { paintingsID } = useParams();
  const navigate = useNavigate();

  const Details = paintings .find(painting => painting.id === parseInt(paintingsID))
  const { id, title, description, image } = Details;

  console.log("product id ", paintingsID)
   console.log("product ", Details)
  return (
        
        <div className="wrapper">
    <div className="product-img">
      <img src={image} height={420} width={327}/>
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>{title}</h1>
        <h2>by studio and friends</h2>
        <p>Harvest Vases are a reinterpretation<br/> of peeled fruits and vegetables as<br/> functional objects. The surfaces<br/> appear to be sliced and pulled aside,<br/> allowing room for growth. </p>
      </div>
      <Link to="/details" className="btn btn-primary btn-sm">PRODUCTS</Link>

      <div className="product-price-btn">
        <p><span>78</span>$</p>

        <button type="button">buy now</button>
      </div>

 
  </div>
  </div>
  )}
  

export default Home
