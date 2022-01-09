import reviewsData from '../stock/reviews/reviews.json'

const reviews = reviewsData;


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