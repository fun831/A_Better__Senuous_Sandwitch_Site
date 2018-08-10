import React, { Component } from 'react';
import Navbar from './navbar';


export default class Locations extends Component {
	 render() {
		return (
			<div className = "Text">
				<Navbar/>

				<h2 className = "Title">Our Locations</h2>
					<div className = "Provo"> 
						<h4>Provo Location</h4>
						<p>1680 S State St Orem, UT 84097-8070</p>
						<p>(801) 377-9244</p>
						<p>Mon-Sat: 10:30am-8pm; Closed Sunday</p>
					</div>
					<div className = "Orem">
						<h4>Orem Location</h4>
						<p>Downtown 163 West Center Street Provo, UT 84601-4431</p>
						<p>(801) 225-9475</p>
						<p>Mon-Sat: 10:30am-8pm; Closed Sunday</p>
					</div>
			</div>
		);
	}
}