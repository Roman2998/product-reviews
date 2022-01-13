import {dealsAPI, gamingAPI, popularAPI, reviewsAPI} from "../api/api";

const SET_REVIEWS = 'SET_REVIEWS';
const SET_CARD_INFO = 'SET_CARD_INFO';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';



const initialState = {
	reviews: [],
	cardInfo:{},
	currentPage: null
}

const reviewsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_REVIEWS:
			return {
				...state,
				reviews: action.payload
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload
			}
		case SET_CARD_INFO:
			return {
				...state,
				cardInfo: action.payload
			}
		default:
			return state;
	}
}

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, payload: currentPage})

export const setReviews = (reviews) => ({type: SET_REVIEWS, payload: reviews})
export const setCardInfo = (cardInfo) => ({type: SET_CARD_INFO, payload: cardInfo})

// Reviews
export const requestReviews = () => async (dispatch) => {
	const response = reviewsAPI.getReviews();
	dispatch(setReviews(response));
}
export const getCardInfo = (cardId) => async (dispatch) => {
	const response = reviewsAPI.getByFindReview(cardId);
	dispatch(setCardInfo(response));
}

// Popular
export const requestPopular = () => async (dispatch) => {
	const response = popularAPI.getPopular();
	dispatch(setReviews(response));
}
export const getCardInfoPopular = (cardId) => async (dispatch) => {
	const response = popularAPI.getByFindPopular(cardId);
	dispatch(setCardInfo(response));
}


// Gaming
export const requestGaming = () => async (dispatch) => {
	const response = gamingAPI.getGaming();
	dispatch(setReviews(response));
}
export const getCardInfoGaming = (cardId) => async (dispatch) => {
	const response = gamingAPI.getByFindGaming(cardId);
	dispatch(setCardInfo(response));
}

// Deals
export const requestDeals = () => async (dispatch) => {
	const response = dealsAPI.getDeals();
	dispatch(setReviews(response));
}
export const getCardInfoDeals = (cardId) => async (dispatch) => {
	const response = dealsAPI.getByFindDeals(cardId);
	dispatch(setCardInfo(response));
}

export default reviewsReducer;