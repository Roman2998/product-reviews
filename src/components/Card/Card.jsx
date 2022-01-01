import React from 'react';
import classes from './Card.module.css'
import {NavLink} from "react-router-dom";

const Card = ({review}) => {
	return (
		<div className={classes.mainDiv} key={review.id}>
			<NavLink to={'/reviews-info/' + review.id}>
				<div className={classes.buttonDiv}>
					<button className={classes.button}>
						<img className={classes.cardMedia}
						     src={review.img}/>
						<div className={classes.cardContent}>
							<div className={classes.cardTitle}>
								{review.preTitle}
							</div>
							<div>{review.preText}</div>
						</div>
					</button>
				</div>
			</NavLink>
		</div>

	)
};

export default Card;
