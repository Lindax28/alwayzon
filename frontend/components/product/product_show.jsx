import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.productId !== nextProps.match.params.productId) {
        this.props.fetchProduct(nextProps.match.params.productId);
    }
  }

  render() {
    const { product, reviews, users } = this.props;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let slowDelivery = new Date();
    slowDelivery.setDate(slowDelivery.getDate() + 7);
    let slowDay = days[slowDelivery.getDay()];
    let slowMonth = months[slowDelivery.getMonth()];
    let slowDate = slowDelivery.getDate();
    let fastDelivery = new Date();
    fastDelivery.setDate(fastDelivery.getDate() + 2);
    let fastDay = days[fastDelivery.getDay()];
    let fastMonth = months[fastDelivery.getMonth()];
    let fastDate = fastDelivery.getDate();

    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const hoursTilMidnight = Math.floor((midnight.getTime()-now.getTime())/3600/1000);
    const minutesTilMidnight = Math.floor((midnight.getTime()-now.getTime())/60/1000 - (60 * hoursTilMidnight));
    return(
      <div>
        <main className="product-info">
          <section>
            <img src={product.imageUrl} alt={product.name} width="100px" height="100px"/>
          </section>
          <section>
            <h1>{product.name}</h1>
            <div>Rating: {product.averageRating || 'No Reviews yet'}</div>
            <div>Price: ${parseFloat(product.price).toFixed(2)}</div>
            <p>{product.description}</p>
          </section>
          <aside>
            <h3>${parseFloat(product.price).toFixed(2)}</h3>
            <div>& FREE Returns</div>
            <p>FREE delivery: {`${slowDay}, ${slowMonth} ${slowDate}`}</p>
            <div>
              <div>Fastest delivery: {`${fastDay}, ${fastMonth} ${fastDate}`}</div>
              <div>Order within {hoursTilMidnight} {hoursTilMidnight === 1 ? "hour" : "hours"} and {minutesTilMidnight} mins</div>
            </div>
            <p>In Stock</p>
            <Link to="/cart" className="submit-button">Add to Cart</Link>
            <div>
              <div>Ships from Alwayzon.com</div>
              <div>Sold by Alwayzon.com</div>
            </div>
            <p>Return policy: This item is returnable</p>
          </aside>
        </main>
        <section className="reviews">
          <section className="review-ratings">
            <h2>Customer reviews</h2>
            <div>Rating: {product.averageRating || 'No Reviews yet'}</div>
            <p>{reviews.length} global {reviews.length === 1 ? "rating" : "ratings"}</p>
            <h3>Review this product</h3>
            <p>Share your thoughts with other customers</p>
            <hr></hr>
            <Link to={`/products/${product.id}/review`}>
              <button type="button" className="redirect-signup glow-on-click">Write a customer review</button>
            </Link>
            <hr></hr>
          </section>
          <section className="review-details">
            <ul>
              {reviews.map((review, idx) => <ReviewIndexItem user={users[review.userId]} review={review} key={`review-${idx}`} />)}
            </ul>
            
          </section>

        </section>
      </div>
    )
  };

};

export default ProductShow;