import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PopularContainer} from "../contentComponents/Popular/PopularContainer";
import {DealsContainer} from "../contentComponents/Deals/DealsContainer";
import {GamingContainer} from "../contentComponents/Gaming/GamingContainer";
import {EntertainmentContainer} from "../contentComponents/Entertainment/EntertainmentContainer";
import {ReviewsContainer} from "../contentComponents/Reviews/ReviewsContainer";
import {CardInfoContainer} from "../Card/CardInfo/CardInfoContainer";
import {useSelector} from "react-redux";

const Body = () => {
	const currentPage = useSelector(state => state.reviewsPage.currentPage)
	return <Routes>
		<Route path={`/`} element={<Navigate to={"/popular"}/>}/>
		<Route path={`/popular/*`} element={<PopularContainer/>}/>
		<Route path={`/reviews/*`} element={<ReviewsContainer/>}/>
		<Route path={`/gaming/*`} element={<GamingContainer/>}/>
		<Route path={`/entertainment/*`} element={<EntertainmentContainer/>}/>
		<Route path={`/deals/*`} element={<DealsContainer/>}/>
		<Route path={`/${currentPage}/:id`} element={<CardInfoContainer/>}/>
	</Routes>
}

export default Body;