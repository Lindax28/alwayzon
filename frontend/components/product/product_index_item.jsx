import React from 'react';

const ProductIndexItem = props => {
  return(
    <li>
      <img src={props.product.pictureUrl} alt={props.product.name} width="100px" height="100px"/>
      <h2>{props.product.name}</h2>
    </li>
  )
}

export default ProductIndexItem;