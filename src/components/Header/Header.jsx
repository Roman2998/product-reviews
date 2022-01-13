import React from 'react';
import classes from './Header.module.css'
import {ReactComponent as HeaderLogo} from '../../header.svg'

const Header = () => {
	return <div className={classes.header}>
		<header>
			<HeaderLogo />
		</header>
	</div>
}

export default Header;