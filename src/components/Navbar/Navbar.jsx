import React from 'react';
import classes from './Navbar.module.css'
import {NavLink, useMatch, useResolvedPath} from "react-router-dom";
import {LinkProps} from "react-router-dom";

const CustomLink = ({children, to, ...props}: LinkProps) => {
	let resolved = useResolvedPath(to);
	let match = useMatch({path: resolved.pathname, end: true});

	return (
		<div style={{padding: "10px", backgroundColor: match ? "white" : "#202124"}}>
			<NavLink
				style={{
					color: match ? "red" : 'var(--color-txt-body)',
					textDecoration: "none"
				}}
				to={to}
				{...props}
			>
				{children}
			</NavLink>
		</div>
	);
}

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<CustomLink to='/popular'>Popular</CustomLink>
			<CustomLink to='/reviews'>Reviews</CustomLink>
			<CustomLink to='/gaming'>Gaming</CustomLink>
			<CustomLink to='/entertainment'>Entertainment</CustomLink>
			<CustomLink to='/deals'>Deals</CustomLink>
		</nav>
	)
}

export default Navbar;