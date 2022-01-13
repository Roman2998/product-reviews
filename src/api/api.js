import reviews from '../stock/reviews/reviews.json'
import popular from '../stock/popular/popular.json'
import gaming from '../stock/gaming/gaming.json'
import deals from '../stock/deals/deals.json'


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

export const dealsAPI = {
	getDeals() {
		return deals.deals
	},
	getByFindDeals(cardId) {
		return deals.deals.filter(deals => {
			return deals.id === +cardId;
		})
	}
}