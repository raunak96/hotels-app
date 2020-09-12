import React, { Fragment } from "react";
import "./App.css";
import { Switch,Route } from 'react-router-dom'
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";


const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/rooms" component={Rooms} />
				<Route exact path="/rooms/:slug" component={SingleRoom} />
				<Route component={PageNotFound} />
			</Switch>
		</Fragment>
	)
};

export default App;
