import {reviewsAPI} from "../api/api";

const SET_REVIEWS = 'SET_REVIEWS';
//
const SET_CARD_INFO = 'SET_CARD_INFO';

const initialState = {
	reviews: [],
	cardInfo:{}
}

const reviewsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_REVIEWS:
			return {
				...state,
				reviews: action.payload
			}
			//
		case SET_CARD_INFO:
			return {
				...state,
				cardInfo: action.payload
			}
		default:
			return state;
	}
}

export const setReviews = (reviews) => ({type: SET_REVIEWS, payload: reviews})
//
export const setCardInfo = (cardInfo) => ({type: SET_CARD_INFO, payload: cardInfo})

export const requestReviews = () => async (dispatch) => {
	const response = reviewsAPI.getReviews();
	dispatch(setReviews(response));
}
//
export const getCardInfo = (cardId) => async (dispatch) => {
	const response = reviewsAPI.getByFindReview(cardId);
	dispatch(setCardInfo(response));
}

export default reviewsReducer;