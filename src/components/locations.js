import React, { Component } from 'react';
import Navbar from './navbar';

export default class Locations extends Component {
	 render() {
		return (
			<div className=''>
				<Navbar/>
				<h4>list of locations</h4>
				<div className="location">
					Downtown 163 West Center Street Provo, UT 84601-4431
				</div>
				<div className="location">
					1680 S State St Orem, UT 84097-8070 801-225-9475
				</div>
				<div>
					MAP
				</div>
				<div>
					Phone number and hours
				</div>
			</div>
		);
	}
}