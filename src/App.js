import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/redux-store";

const App = ()=> {
	return (
		<div className="app-wrapper">
			<div className="row-fill">
				<div className="row-item">
					<Header/>
					<Navbar/>
				</div>
			</div>
			<div className="row-content">
				<div className="row-item">
					<Body/>
				</div>
			</div>
			<div className="row-fill">
				<div className="row-item">
					<Footer/>
				</div>
			</div>
		</div>
	);
}

const AppContainer = () => {
	return <BrowserRouter>
		<Provider store={store}>
			<App/>
		</Provider>
	</BrowserRouter>
}
export default AppContainer;
