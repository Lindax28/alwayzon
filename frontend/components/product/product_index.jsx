import React from 'react';
import ProductIndexItem from './product_index_item';
import queryString from 'query-string';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearProducts();
  }

  componentWillMount() {
    if (this.props.products.length === 0) {
      const query = queryString.parse(this.props.location.search);
      this.props.fetchProducts(query.search, query.category);
    }
  }

  render() {
    let products = this.props.products.map((product, idx) => <ProductIndexItem key={`product-${idx}`} product={product} />)
    return(
      <main>
        {/* <a id="top"></a> */}
        <ul className="product-index">
          { products.length === 0 ? <li>No results found. Try checking your spelling or use more general terms.</li> : products }
          {/* <a className="back-to-top" href="#top">Back to top</a> */}
        </ul>
      </main>
    )
  }
}

export default ProductIndex;