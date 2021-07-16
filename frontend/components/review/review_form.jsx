import React from 'react';
import { Redirect } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      userId: this.props.userId,
      productId: parseInt(this.props.match.params.productId),
      rating: '',
      title: '',
      body: ''
    }
    this.formComplete = this.formComplete.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentWillMount() {
    this.props.fetchProduct(this.props.match.params.productId).then(() => window.scrollTo(0, 0));
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.productId !== nextProps.match.params.productId) {
        this.props.fetchProduct(nextProps.match.params.productId);
    }
  }

  formComplete() {
    return this.state.rating.trim() && this.state.title.trim() && this.state.body.trim();
  }
  
  handleInput(type) {
    return e => this.setState({[type]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const state = {
      user_id: this.state.userId,
      product_id: this.state.productId,
      rating: parseInt(this.state.rating),
      title: this.state.title,
      body: this.state.body
    }
    this.props.postReview(state);
    this.setState({complete: true});
  }

  render() {
    if(this.state.complete)  {
      return <Redirect to={`/products/${this.state.productId}`}/>
    }
    return(
      <main className="review-page">
        <form onSubmit={this.handleSubmit} className="review-form">
          <h2>Create Review</h2>
          <div className="review-product">
            <img src={this.props.product.imageUrl} alt={this.props.product.name} />
            <p>{this.props.product.name}</p>
          </div>
          <div className="review-stars">
            <h3>Overall Rating</h3>
            <div className="rate" onChange={this.handleInput("rating")}>
              <input type="radio" id="star5" name="rate" value="5" />
              <label htmlFor="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
              <label htmlFor="star4" title="text">4 stars</label>
              <input type="radio" id="star3" name="rate" value="3" />
              <label htmlFor="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" />
              <label htmlFor="star2" title="text">2 stars</label>
              <input type="radio" id="star1" name="rate" value="1" />
              <label htmlFor="star1" title="text">1 star</label>
            </div>
          </div>
          <label className="post-review-title"><h3>Add a headline</h3>
            <input type="text" value={this.state.title} onChange={this.handleInput("title")} placeholder="What's most important to know?"/>
          </label>
          <label className="post-review-body"><h3>Add a written review</h3>
            <textarea onChange={this.handleInput("body")} cols="30" rows="10" defaultValue={this.state.body} placeholder="What did you like or dislike? What did you use this product for?"></textarea>
          </label>
          <div className="review-buttons">
            <button type="button" onClick={this.props.history.goBack} className="cancel-button">Cancel</button>
            {this.formComplete() ? <button type="submit" className="login-button submit-review-button glow-on-click">Submit</button> : <button type="submit" className="login-button disabled-review-button" disabled >Submit</button>}
          </div>
        </form>
      </main>
    )
  }
}
  

export default ReviewForm;