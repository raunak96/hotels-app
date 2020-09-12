import React, { useContext } from "react";
import { RoomContext } from "../context/RoomProvider";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";

const FeaturedRooms = () => {
	const { loading, featuredRooms } = useContext(RoomContext);

	return (
		<section className='featured-rooms'>
			<Title title='featured rooms' />
			<div className='featured-rooms-center'>
				{loading ? (
					<Loading />
				) : (
					featuredRooms.map((room) => (
						<Room key={room.id} room={room} />
					))
				)}
			</div>
		</section>
	);
};

export default FeaturedRooms;
