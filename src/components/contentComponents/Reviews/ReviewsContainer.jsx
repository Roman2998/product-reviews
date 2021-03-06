import React, {useEffect} from 'react';
import Reviews from "./Reviews";
import {useDispatch, useSelector} from "react-redux";
import {requestReviews, setCurrentPage} from "../../../Redux/reviews-reducer";
import {PAGES} from "../../../constants";

export const ReviewsContainer = () => {
	const dispatch = useDispatch();
	const reviews = useSelector(state => state.reviewsPage.reviews);
	const currentPage = useSelector(state => state.reviewsPage.currentPage)


	useEffect(()=> {
		dispatch(requestReviews());
		dispatch(setCurrentPage(PAGES.reviews))
	},[])// eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Reviews reviews={reviews} currentPage={currentPage} />
	)
}