import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Popular from "../contentComponents/Popular/Popular";
import Deals from "../contentComponents/Deals/Deals";
import Gaming from "../contentComponents/Gaming/Gaming";
import Entertainment from "../contentComponents/Entertainment/Entertainment";
import ReviewsContainer from "../contentComponents/Reviews/ReviewsContainer";
import {CardInfoContainer} from "../Card/CardInfo/CardInfoContainer";

const Body = () => {
	return <Routes>
		<Route path={`/`} exact element={<Navigate to={"/popular"}/>}/>
		<Route path={`/popular`} element={<Popular/>}/>
		<Route path={`/reviews`} element={<ReviewsContainer/>}/>
		<Route path={`/gaming`} element={<Gaming/>}/>
		<Route path={`/entertainment`} element={<Entertainment/>}/>
		<Route path={`/deals`} element={<Deals/>}/>
		<Route path={`/reviews-info/:id`} element={<CardInfoContainer/>}/>
	</Routes>
}

export default Body;