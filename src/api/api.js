import reviewsData from '../stock/reviews/reviews.json'
import popularData from '../stock/popular/popular.json'
import gaming from '../stock/gaming/gaming.json'

const reviews = reviewsData;
const popular = popularData;


export const reviewsAPI = {
	getReviews() {
		return reviews.reviews
	},
	getByFindReview(cardId) {
		return reviews.reviews.filter(reviews => {
			return reviews.id === +cardId;
		})
	}
}

export const popularAPI = {
	getPopular() {
		return popular.popular
	},
	getByFindPopular(cardId) {
		return popular.popular.filter(popular => {
			return popular.id === +cardId;
		})
	}
}

export const gamingAPI = {
	getGaming() {
		return gaming.gaming
	},
	getByFindGaming(cardId) {
		return gaming.gaming.filter(gaming => {
			return gaming.id === +cardId;
		})
	}
}