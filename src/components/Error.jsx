import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
		<div className='error'>
			<h3> no such room could be found...</h3>
			<Link to='/rooms' className='btn-primary'>
				back to rooms
			</Link>
		</div>
	);
};

export default Error;