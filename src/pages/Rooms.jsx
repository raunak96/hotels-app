import React, { Fragment, useContext } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsFilter from '../components/RoomsFilter';
import RoomsList from '../components/RoomsList';
import { RoomContext } from '../context/RoomProvider';
import Loading from "../components/Loading";

const Rooms = () => {
	const { loading } = useContext(RoomContext);
    return (
		<Fragment>
			<Hero hero='roomsHero'>
				<Banner title='our rooms'>
					<Link to='/' className='btn-primary'>
						return home
					</Link>
				</Banner>
			</Hero>
			{loading ? (<Loading/>) : (
				<Fragment>
					<RoomsFilter />
					<RoomsList/>
				</Fragment>
				)
			}
		</Fragment>
	);
};

export default Rooms;