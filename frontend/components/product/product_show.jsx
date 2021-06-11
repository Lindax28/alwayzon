import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';
import { FcCheckmark } from 'react-icons/fc';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showFeedback: false
    };

    this.addToCart = this.addToCart.bind(this);
    this.showPopup = this.showPopup.bind(this);
  }

  componentWillMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.productId !== nextProps.match.params.productId) {
        this.props.fetchProduct(nextProps.match.params.productId);
    }
  }

  showPopup() {
    if (!this.state.showFeedback) {
      return null;
    } else {
      return(
        <div className="cart-confirmation">
          <div className="green-check"><FcCheckmark size={40}/></div>
          <img src={this.props.product.imageUrl} alt={this.props.product.name} />
          <h3>Added to Cart</h3>
          <button className="write-review continue-shopping" onClick={()=>this.setState({showFeedback: false})}>Continue Shopping</button>
          <Link className="add-to-cart view-cart" to="/cart">View Cart</Link>
        </div>
      )
    }
  }

  addToCart() {
    this.props.createCartItem({ user_id: this.props.userId, product_id: this.props.product.id, quantity: 1}).then(()=>this.setState({showFeedback: true}));
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

    let reviewList = reviews.map((review, idx) => <ReviewIndexItem user={users[review.userId]} review={review} key={`review-${idx}`} />);

    return(
      <div className="product-show-page">
        {this.showPopup()}
        <main className="product-info">
          <img src={product.imageUrl} alt={product.name} />
          <section>
            <h1>{product.name}</h1>
            <div>Rating: {product.averageRating ? parseFloat(product.averageRating).toFixed(1) : 'No Reviews yet'}</div>
            <hr />
            <div>Price: <span className="product-price">${parseFloat(product.price).toFixed(2)}</span> & FREE Returns</div>
            <hr />
            <h3 className="bold">About this item</h3>
            <li>{product.description}</li>
          </section>
          <aside>
            <h3><span className="product-price">${parseFloat(product.price).toFixed(2)}</span></h3>
            <div>& FREE Returns</div>
            <br />
            <p>FREE delivery: <span className="bold">{`${slowDay}, ${slowMonth} ${slowDate}`}</span></p>
            <br />
            <div>
              <div className="line-height">
                Fastest delivery: <span className="bold">{`${fastDay}, ${fastMonth} ${fastDate}`}</span><br></br>
                Order within {hoursTilMidnight} {hoursTilMidnight === 1 ? "hour" : "hours"} and {minutesTilMidnight} mins
              </div>
            </div>
            <p className="in-stock">In Stock.</p>
            <button onClick={()=>this.addToCart()} className="add-to-cart">Add to Cart</button>
            <div className="shipped-by line-height">
              <div><span className="gray">Ships from</span> &nbsp;&nbsp;Alwayzon.com</div>
              <div><span className="gray">Sold by</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alwayzon.com</div>
            </div>
            <p>Return policy: This item is returnable</p>
          </aside>
        </main>
        <section className="reviews">
          <section className="review-ratings">
            <h2>Customer reviews</h2><br></br>
            <div>Rating: {product.averageRating ? `${parseFloat(product.averageRating).toFixed(1)} out of 5` : 'No Reviews yet'}</div><br></br>
            <p className="gray">{reviews.length} global {reviews.length === 1 ? "rating" : "ratings"}</p>
            <hr />
            <h3>Review this product</h3>
            <p>Share your thoughts with other customers</p>
            <Link to={`/products/${product.id}/review`}>
              <button type="button" className="write-review glow-on-click">Write a customer review</button>
            </Link>
            <hr></hr>
          </section>
          <section className="review-details">
            <h3>Top reviews from the United States</h3>
            <ul>
              {reviewList.length === 0 ? <li>There are no customer reviews yet.</li> : reviewList }
            </ul>
            
          </section>

        </section>
      </div>
    )
  };

};

export default ProductShow;