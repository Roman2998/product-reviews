import React from 'react';
import classes from './Body.module.css'
import {Route, Routes} from "react-router-dom";
import Popular from "../contentComponents/Popular/Popular";
import Deals from "../contentComponents/Reviews/Deals";
import Gaming from "../contentComponents/Gaming/Gaming";
import Entertainment from "../contentComponents/Entertainment/Entertainment";

const Body = () => {
	return <div>
		<Routes>
			<Route path={`/popular`} element={<Popular/>}/>
			<Route path={`/reviews`} element={<Deals/>}/>
			<Route path={`/gaming`} element={<Gaming/>}/>
			<Route path={`/entertainment`} element={<Entertainment/>}/>
			<Route path={`/deals`} element={<Deals/>}/>
		</Routes>

	</div>
}

export default Body;