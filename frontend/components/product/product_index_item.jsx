import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = props => {
  return(
    <li>
      <Link to={`/products/${props.product.id}`}>
        <img src={props.product.imageUrl} alt={props.product.name} width="100px" height="100px"/>
        <h2>{props.product.name}</h2>
      </Link>
    </li>
  )
}

export default ProductIndexItem;