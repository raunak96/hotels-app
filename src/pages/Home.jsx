import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
	return (
		<Fragment>
			<Hero>
				<Banner title="luxurious rooms" subtitle="deluxe rooms starting at ₹2900">
					<Link to="/rooms" className="btn-primary">
						our rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRooms/>
		</Fragment>
	);
};

export default Home;
