import React from 'react';
import ProductIndexItem from './product_index_item';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import Spinner from '../home/spinner';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
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

  // componentDidMount() {
  //   this.setState({loading: false})
  // }

  componentDidMount() {
    setTimeout(function() { 
      this.setState({loading: false})
  }.bind(this), 500)
  }

  render() {
    if (this.state.loading) {
      return <Spinner />
    }
    let products = this.props.products.map((product, idx) => <ProductIndexItem key={`product-${idx}`} product={product} />)
    return(
      <div>
        {/* <div name="top2"></div> */}
        <ul className="product-index">
          {/* <a className="back-to-top" href="#top2">Back to top</a> */}
          { products.length === 0 ? <li className="no-results">No results found. Try checking your spelling or use more general terms.</li> : products }
        </ul>
      </div>
    )
  }
}

export default ProductIndex;