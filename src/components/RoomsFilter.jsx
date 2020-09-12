import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomProvider';
import Title from "./Title";

const getUniquePropertyValues = (rooms,propertyName)=>{
    return [...new Set(rooms.map(room=> room[propertyName]))];
}

const RoomsFilter = () => {
    const {rooms,handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets} = useContext(RoomContext);
    const roomTypes = ['all',...getUniquePropertyValues(rooms,"type")];
    const capacityOptions = getUniquePropertyValues(rooms,"capacity");
    return (
		<section className='filter-container'>
			<Title title='search rooms' />
			<form className='filter-form'>
				<div className='form-group'>
					<label htmlFor='type'>room type</label>
					<select name='type' id='type' onChange={handleChange} className='form-control' value={type}>
						{roomTypes.map((roomType,ind)=> <option key={ind} value={roomType} >{roomType}</option>)}
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='capacity'>Min no of guests</label>
					<select name='capacity' id='capacity' onChange={handleChange} className='form-control' value={capacity}>
						{capacityOptions.map((capacityOption,ind)=> <option key={ind} value={capacityOption} >{capacityOption}</option>)}
					</select>
				</div>
                <div className="form-group">
                    <label htmlFor='price'>room price</label>
                    <input type="range" name="price" min={minPrice} id="price" max={maxPrice} value={price} className="form-control" onChange={handleChange} />
					<label htmlFor="price">₹{price}</label>

                </div>
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" id="size" name="minSize" value={minSize} className="size-input" onChange={handleChange} min="0" />
                        <input type="number" id="size" name="maxSize" value={maxSize} className="size-input" onChange={handleChange} min="0" />
                    </div>
                </div>
				<div className="form-group">
					<div className="single-extra">
						<input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
						<label htmlFor="breakfast">breakfast</label>
					</div>
					<div className="single-extra">
						<input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
						<label htmlFor="pets">pets</label>
					</div>
				</div>
			</form>
		</section>
	);
};

export default RoomsFilter;