import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCardInfo, getCardInfoDeals, getCardInfoGaming, getCardInfoPopular} from "../../../Redux/reviews-reducer";
import CardInfo from "./CardInfo";
import {useParams} from "react-router-dom";
import {PAGES} from "../../../constants";

export const CardInfoContainer = () => {
	const dispatch = useDispatch();
	const cardInfo = useSelector(state => state.reviewsPage.cardInfo);
	const currentPage = useSelector(state => state.reviewsPage.currentPage)
	const {id: cardId} = useParams();

	useEffect(() => {
		switch (currentPage) {
			case PAGES.reviews:
				dispatch (getCardInfo(cardId))
				break
			case PAGES.popular:
				dispatch (getCardInfoPopular(cardId))
				break
			case PAGES.gaming:
				dispatch (getCardInfoGaming(cardId))
				break
			case PAGES.deals:
				dispatch (getCardInfoDeals(cardId))
				break
			default:
				break
		}
	}, [cardId]);// eslint-disable-line react-hooks/exhaustive-deps

	return (
	  <CardInfo cardInfo={cardInfo} />
  )
}
