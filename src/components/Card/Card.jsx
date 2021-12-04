import React from 'react';
import classes from './Card.module.css'

const Card = () => {
	return (
		<div className={classes.mainDiv}>
			<div className={classes.buttonDiv}>
				<button className={classes.button}>

					<img className={classes.cardMedia}
					     src={'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80'}/>

					<div className={classes.cardContent}>
						<div className={classes.cardTitle}>
							Lizard
						</div>
						<div className={classes.cardMainText}>
							Lizards are a widespread group of squamate reptiles, with
							over 6,000 species, ranging across all continents except
							Antarctica
							Lizards are a widespread group of squamate reptiles, with
							over 6,000 species, ranging across all continents except
							Antarctica
						</div>
					</div>
				</button>
			</div>
		</div>

	)
};

export default Card;
