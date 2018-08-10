import React, { Component } from 'react';
import Navbar from './navbar';

import LocationInformation from './locationInformation';


export default class Locations extends Component {
	 render() {
		return (
			<div className=''>
				<Navbar/>
				<h2>Our Locations</h2>
				{LocationInformation("Provo", "Downtown 163 West Center Street Provo, UT 84601-4431", "(801) 377-9244", "Mon-Sat: 10am-10pm; Closed Sun")}
				{LocationInformation("Orem", "1680 S State St Orem, UT 84097-8070 801-225-9475", "(801) 225-9475", "Mon-Sat: 10am-10pm; Closed Sun")}
				<div>
				
					MAP
				</div>
			</div>
		);
	}
}