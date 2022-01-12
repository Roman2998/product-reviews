import React from 'react';
import Card from "../../Card/Card";
import classes from './Reviews.module.css'

const Reviews = ({reviews, currentPage}) => {
	return <div className={classes.reviews}>
		{
			reviews.map(r => <Card review={r}
			                       currentPage={currentPage}
			                       key={r.id}
			/>)
		}
	</div>
}

export default Reviews;