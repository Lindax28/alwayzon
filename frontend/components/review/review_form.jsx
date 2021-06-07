import React from 'react';
import { Redirect } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      productId: this.props.product.id,
      rating: '',
      title: '',
      body: ''
    }
    this.formComplete = this.formComplete.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   componentWillMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.productId !== nextProps.match.params.productId) {
        this.props.fetchProduct(nextProps.match.params.productId);
    }
  }

  formComplete() {
    return this.state.rating.trim() && this.state.title.trim() && this.state.body.trim()
  }
  
  handleInput(type) {
    return e => this.setState({[type]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const state = Object.assign({}, this.state);
    this.props.postReview(state);
    <Redirect to={`/products/${this.state.productId}`}/>
  }

  render() {
    return(
      <main className="review-page">
        <form onSubmit={this.handleSubmit}>
          <h2>Create Review</h2>
          <img src={this.props.product.imageUrl} alt={this.props.product.name} />
          <p>{this.props.product.name}</p>
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
          <label>Add a headline
            <input type="text" value={this.state.title} onChange={this.handleInput("title")} placeholder="What's most important to know?"/>
          </label>
          <label>Add a written review
            <textarea onChange={this.handleInput("body")} cols="30" rows="10" defaultValue={this.state.body} placeholder="What did you like or dislike? What did you use this product for?"></textarea>
          </label>
            {this.formComplete() ? <button type="submit">Submit</button> : <button type="submit" disabled >Submit</button>}
        </form>
      </main>
    )
  }
}
  

export default ReviewForm;