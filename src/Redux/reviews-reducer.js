import {reviewsAPI} from "../api/api";

const SET_REVIEWS = 'SET_REVIEWS';
//
const SET_CARD_INFO = 'SET_CARD_INFO';

const initialState = {
	reviews: []
}

const reviewsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_REVIEWS:
			return {
				...state,
				reviews: action.reviews
			}
			//
		case SET_CARD_INFO:
			return {
				...state,
				cardInfo: action.cardInfo
			}
		default:
			return state;
	}
}

export const setReviews = (reviews) => ({type: SET_REVIEWS, reviews})
//
export const setCardInfo = (cardInfo) => ({type: SET_CARD_INFO, cardInfo})

export const requestReviews = () => (dispatch) => {
	const response = reviewsAPI.getReviews();
	dispatch(setReviews(response));
}

//
export const getCardInfo = (cardId) => (dispatch) => {
	const response = reviewsAPI.getInfo(cardId);
	dispatch(setCardInfo(response));
}

export default reviewsReducer;