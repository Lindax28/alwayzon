import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts({});
  }

  render() {
    return(
      <ul>
        {this.props.products.map((product, idx) => <ProductIndexItem key={`product-${idx}`} product={product} />)}
      </ul>
    )
  }
}

export default ProductIndex;