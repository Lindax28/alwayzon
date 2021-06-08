import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearProducts();
  }



  render() {
    let products = this.props.products.map((product, idx) => <ProductIndexItem key={`product-${idx}`} product={product} />)
    return(
      <ul>
        { products.length === 0 ? <li>No results found. Try checking your spelling or use more general terms.</li> : products }
      </ul>
    )
  }
}

export default ProductIndex;