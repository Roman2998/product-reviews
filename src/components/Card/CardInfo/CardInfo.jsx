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
					// eslint-disable-next-line array-callback-return
					cardInfo[0] && Object.keys(cardInfo[0].text).map(key => {
						if (cardInfo[0].text[key]) {
							return (
								<div key={key}>
									<h3> {cardInfo[0].text[key].title}</h3>
									{cardInfo[0].text[key].img &&
									<div className={classes.reviewImg}>
										<img src={cardInfo[0].text[key].img}
										     alt={cardInfo[0].text[key].title || cardInfo[0].title}/>
									</div>
									}
									{cardInfo[0].text[key].linkToBuy &&
									<div className={classes.button}>
										<a href={cardInfo[0].text[key].linkToBuy} target={"_blank"}
										   rel={"noreferrer"}>Buy from Amazon</a>
									</div>
									}
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