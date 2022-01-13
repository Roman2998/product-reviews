import reviews from '../stock/reviews/reviews.json'
import popular from '../stock/popular/popular.json'
import gaming from '../stock/gaming/gaming.json'
import deals from '../stock/deals/deals.json'
import entertainment from '../stock/entertainment/entertainment.json'


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

// EntertainmentContainer
export const entertainmentAPI = {
	getEntertainment() {
		return entertainment.entertainment
	},
	getByFindEntertainment(cardId) {
		return entertainment.entertainment.filter(entertainment => {
			return entertainment.id === +cardId;
		})
	}
}