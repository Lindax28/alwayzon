import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = props => {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let fastDelivery = new Date();
  fastDelivery.setDate(fastDelivery.getDate() + 2);
  let fastDay = days[fastDelivery.getDay()];
  let fastMonth = months[fastDelivery.getMonth()];
  let fastDate = fastDelivery.getDate();
  return(
    <li className="product-index-item">
      <Link className="product-item" to={`/products/${props.product.id}`}>
        <img src={props.product.imageUrl} alt={props.product.name} width="100px" height="100px"/>
        <h2>{props.product.name}</h2>
      </Link>
      <div className="rating-index">{props.product.averageRating ? (
        <div className="star-ratings-css-index">
          <div className="star-ratings-css-index-top" style={{width: `${parseFloat(props.product.averageRating).toFixed(1)}em`}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
          <div className="star-ratings-css-index-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        </div>) : 'No Reviews yet'}
      </div>
        <h2 className="price">${parseFloat(props.product.price).toFixed(2)}</h2>
        <p className="shipping-info">
          <img id="time-logo" src={window.time} alt="time logo" />
          Get it as soon as <span className="bold">{`${fastDay}, ${fastMonth} ${fastDate}`}</span>
          <br></br>
          FREE shipping by Alwayzon
        </p>
    </li>
  )
}

export default ProductIndexItem;