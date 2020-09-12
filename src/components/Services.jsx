import React from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const services = [
	{
		icon: <FaCocktail />,
		title: "Free Cocktails",
		info:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
	},
	{
		icon: <FaHiking />,
		title: "Endless Hiking",
		info:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
	},
	{
		icon: <FaShuttleVan />,
		title: "Free Shuttle",
		info:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
	},
	{
		icon: <FaBeer />,
		title: "Strongest Beer",
		info:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
	},
];

const Services = () => {
    return (
		<div>
			<Title title='services' />
			<div className='services-center'>
				{services.map((item, index) => (
					<article key={`item-${item.title}`} className='service'>
						<span>{item.icon}</span>
						<h6>{item.title}</h6>
						<p>{item.info}</p>
					</article>
				))}
			</div>
		</div>
	);
};

export default Services;