import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {getCardInfo} from "../../../Redux/reviews-reducer";
import {compose} from "redux";
import {withRouter} from "../../common/withRouter/withRouter";
import CardInfo from "./CardInfo";
import {useParams} from "react-router-dom";


// class CardInfoContainer extends React.Component {
// 	refreshCard() {
// 		let cardId = this.props.match.params;
// 		this.props.getCardInfo(cardId)
// 	}
// 	componentDidMount() {
// 		this.refreshCard();
// 	}
// 	componentDidUpdate(prevProps, prevState, snapshot) {
// 		if (this.props.match.params.id !== prevProps.match.params.id) {
// 			this.refreshCard();
// 		}
// 	}
// 	render() {
// 		return (
// 			<CardInfo {...this.props.cardInfo}/>
//
// 		)
// 	}
// }
// const mapStateToProps = (state) => {
// 	return {
// 		cardInfo: state.reviewsPage.cardInfo
// 	}
// }
//
// export default compose(
// 	connect(mapStateToProps, {getCardInfo}),
// 	withRouter
// )(CardInfoContainer);


//hooks

export const CardInfoContainer = (props) => {
	debugger
	const cardInfo = useSelector(state => state.reviewsPage.cardInfo);
	const dispatch = useDispatch();
	const cardId = useParams();

	useEffect(refreshCard);


	function refreshCard() {
		dispatch (getCardInfo(cardId))
	}


	return (
	  <CardInfo />
  )
}
