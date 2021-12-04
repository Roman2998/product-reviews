import React from 'react';
import Card from "../../Card/Card";
import classes from './Popular.module.css'

const Popular = () => {
	return <div className={classes.popular}>
			<Card />
			<Card />
			<Card />
			<Card />
	</div>
}

export default Popular;