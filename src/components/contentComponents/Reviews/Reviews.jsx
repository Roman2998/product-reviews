import React from 'react';
import Card from "../../Card/Card";
import classes from './Reviews.module.css'

const Reviews = ({reviews}) => {
	return <div className={classes.reviews}>
		{
			reviews.map(r => <Card review={r}
			                       key={r.id}
			/>)
		}
	</div>
}

export default Reviews;