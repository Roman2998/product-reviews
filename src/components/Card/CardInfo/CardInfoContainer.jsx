import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCardInfo} from "../../../Redux/reviews-reducer";
import CardInfo from "./CardInfo";
import {useParams} from "react-router-dom";

export const CardInfoContainer = () => {
	const dispatch = useDispatch();
	const cardInfo = useSelector(state => state.reviewsPage.cardInfo);
	const {id: cardId} = useParams();

	useEffect(() => {
		dispatch (getCardInfo(cardId))
	}, [cardId]);

	return (
	  <CardInfo cardInfo={cardInfo} />
  )
}
