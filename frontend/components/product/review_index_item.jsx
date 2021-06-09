import React from 'react';
import { CgProfile } from 'react-icons/cg';

const ReviewIndexItem = props => {
  return(
    <li className="review-item">
      <div><CgProfile />&nbsp;{props.user.firstName}&nbsp;{props.user.lastName}</div>
      <p className="review-title">{props.review.title}</p>
      <p className="review-rating">Rating: {props.review.rating}</p>
      <p className="review-body">{props.review.body}</p>
    </li>
  )
}

export default ReviewIndexItem;