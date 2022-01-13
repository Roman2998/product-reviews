import React from 'react';
import classes from './Card.module.css'
import {NavLink} from "react-router-dom";

const Card = ({review,currentPage}) => {
	return (
		<div className={classes.mainDiv} key={review.id}>
			<NavLink to={`/${currentPage}/` + review.id}>
				<div className={classes.buttonDiv}>
					<div className={classes.button}>
						<img className={classes.cardMedia} src={review.img} alt={review.title}/>
						<div className={classes.cardContent}>
							<div className={classes.cardTitle}>
								{review.title}
							</div>
						</div>
					</div>
				</div>
			</NavLink>
		</div>
	)
};

export default Card;
