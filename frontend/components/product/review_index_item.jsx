import React from 'react';
import { CgProfile } from 'react-icons/cg';

const ReviewIndexItem = props => {
  return(
    <li>
      <div><CgProfile />&nbsp;{props.user.firstName}&nbsp;{props.user.lastName}</div>
      <h3>{props.review.title}</h3>
      <p>{props.review.body}</p>
    </li>
  )
}

export default ReviewIndexItem;