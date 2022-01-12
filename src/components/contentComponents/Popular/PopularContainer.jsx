import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {requestPopular, setCurrentPage} from "../../../Redux/reviews-reducer";
import Reviews from "../Reviews/Reviews";
import {PAGES} from "../../../constants";

export const PopularContainer = () => {
	const dispatch = useDispatch();
	const reviews = useSelector(state => state.reviewsPage.reviews);
	const currentPage = useSelector(state => state.reviewsPage.currentPage)


	useEffect(()=> {
		dispatch(requestPopular());
		dispatch(setCurrentPage(PAGES.popular))
	},[])// eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Reviews reviews={reviews} currentPage={currentPage} />
	)
}