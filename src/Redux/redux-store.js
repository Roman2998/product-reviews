import {applyMiddleware, combineReducers, createStore} from "redux";
import reviewsReducer from "./reviews-reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
	reviewsPage: reviewsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;