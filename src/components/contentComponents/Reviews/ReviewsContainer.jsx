import React from 'react';
import Reviews from "./Reviews";
import {connect} from "react-redux";
import {requestReviews} from "../../../Redux/reviews-reducer";
import {compose} from "redux";
import {withRouter} from "../../common/withRouter/withRouter";

class ReviewsContainer extends React.Component {

	componentDidMount() {
		this.props.requestReviews();
	}

	render() {
		return <Reviews reviews={this.props.reviews}/>
	}
}
const mapStateToProps = (state) => {
	return {
		reviews: state.reviewsPage.reviews
	}
}
export default compose(
	connect(mapStateToProps, {requestReviews}),
	withRouter
)(ReviewsContainer);