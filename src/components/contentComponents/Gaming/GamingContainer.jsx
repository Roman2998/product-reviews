// import React from 'react';
//
// const GamingContainer = () => {
// 	return <div>Gaming Gaming Gaming</div>
// }
//
// export default GamingContainer;


import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {requestGaming, setCurrentPage} from "../../../Redux/reviews-reducer";
import Reviews from "../Reviews/Reviews";
import {PAGES} from "../../../constants";

export const GamingContainer = () => {
	const dispatch = useDispatch();
	const reviews = useSelector(state => state.reviewsPage.reviews);
	const currentPage = useSelector(state => state.reviewsPage.currentPage)

	useEffect(()=> {
		dispatch(requestGaming());
		dispatch(setCurrentPage(PAGES.gaming))
	},[])// eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Reviews reviews={reviews} currentPage={currentPage} />
	)
}