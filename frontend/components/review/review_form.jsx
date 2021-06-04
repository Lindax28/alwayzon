import React from 'react';

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

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    e => this.setState({[type]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const state = Object.assign({}, this.state);
    this.props.postReview(state);
  }

  renderErrors() {
    return(
      <ul className="review-error-list">
        {this.props.errors.map((error,idx) => <li className="review-error" key={`error-${idx}`}>{error}</li>)}
      </ul>
    )
  }

  render() {
    return(
      <main className="review-page">
        <form onSubmit={this.handleSubmit}>
          <h2>Create Review</h2>
          <img src={this.props.product.picture_url} alt={this.props.product.name} />
          <p>{this.props.product.name}</p>
          <h3>Overall Rating</h3>
          <label>
            <input type="text" value={this.state.title} onChange={this.handleInput("title")}/>
          </label>
          <label>
            <textarea onChange={this.handleInput("body")} cols="30" rows="10">{this.state.body}</textarea>
          </label>
          <div className="review-errors">{this.renderErrors()}</div>
          <button type="submit">Submit</button>
        </form>
      </main>
    )
  }
}
  

export default ReviewForm;