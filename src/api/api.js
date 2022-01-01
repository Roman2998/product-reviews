
const reviews = {
	reviews : [
		{
			id: 1,
			img:'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
			preTitle: 'Pre Title',
			preText:'Pre Text',
			title:'Main Title',
			text:'Main Text 1 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
		},
		{
			id: 2,
			img:'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
			preTitle: 'Pre Title 2',
			preText:'Pre Text 2',
			title:'Main Title 2',
			text:'Main Text 2 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
		},
		{
			id: 3,
			img:'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
			preTitle: 'Pre Title 3',
			preText:'Pre Text 3',
			title:'Main Title 3',
			text:'Main Text 3 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
		},
		{
			id: 4,
			img:'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
			preTitle: 'Pre Title 4',
			preText:'Pre Text 4',
			title:'Main Title 4',
			text:'Main Text 4 Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
		}
	]
};


export const reviewsAPI = {
	getReviews() {
		return reviews.reviews
	},
	getInfo(cardId) {
		return reviews.reviews.find(reviews => reviews.id === cardId)
	}
}