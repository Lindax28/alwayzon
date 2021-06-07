import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { clearErrors } from '../../actions/session_actions';
import { postReview } from '../../actions/product_actions';

const mapState = ({errors, session}, ownProps) => ({
  errors: errors.review,
  userId: session.id,
  product: ownProps.product
});

const mapDispatch = dispatch => ({
  postReview: review => dispatch(postReview(review)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapState, mapDispatch)(ReviewForm);