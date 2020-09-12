import React, { useContext } from 'react';
import Room from './Room';
import {RoomContext } from '../context/RoomProvider';

const RoomsList = () => {
	const {sortedRooms:rooms} = useContext(RoomContext);
    return !rooms.length ? (
		<div className='empty-search'>
			<h3>unfortunately no rooms matched your search parameters</h3>
		</div>
	) : (
		<section className='roomslist'>
			<div className='roomslist-center'>
				{rooms.map((item) => {
					return <Room key={item.id} room={item} />;
				})}
			</div>
		</section>
	);
};

export default RoomsList;