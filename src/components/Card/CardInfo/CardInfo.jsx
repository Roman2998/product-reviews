import React from 'react';
import classes from './CardInfo.module.css'

const CardInfo = ({cardInfo}) => {
	return (
		<div className={classes.content}>
			<div className={classes.titleImg}>
				<img src={cardInfo[0] && cardInfo[0].img} alt={cardInfo[0] && cardInfo[0].title}/>
			</div>
			<div className={classes.title}>
				<h3>{cardInfo[0] && cardInfo[0].title}</h3>
			</div>
			<div className={classes.text}>
				{
					cardInfo[0] && Object.keys(cardInfo[0].text).map(key => {
						if (cardInfo[0].text[key].title) {
							return (
								<div key={key}>
									<h3> {cardInfo[0].text[key].title}</h3>
									<div className={classes.reviewImg}>
										<img src={cardInfo[0].text[key].img} alt={cardInfo[0].text[key].title}/>
									</div>
									<p>{cardInfo[0].text[key].text}</p>
								</div>
							)
						}
					})
				}
				<h5>{cardInfo[0] && cardInfo[0].end}</h5>
			</div>
		</div>
	)
};

export default CardInfo;