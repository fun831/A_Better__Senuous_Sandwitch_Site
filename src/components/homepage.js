import React, { Component } from 'react';

import SlideShow from './slideShow';

import Navbar from './navbar';

export default class Homepage extends Component {
	 render() {
		return (
			<div className=''>
				<div>Menu Link</div>
				<div>About Us</div>
			<div className='homepage'>
				<div className='greeting'>
					<h1>Welcome to Sensuous Sandwiches! Thanks for visiting!!</h1>
					<p>At Sensuous Sandwiches we believe in using only the finest quality, freshest ingredients.</p>
				<SlideShow />
					<div className="social">
						<i className="fab fa-instagram"></i>
						<i className="fab fa-twitter"></i>
						<i className="fab fa-snapchat-ghost"></i>
						<i className="fab fa-facebook"></i>
						<i className="fab fa-linkedin"></i>
						<i className="fab fa-google-plus-square"></i>
						<i className="fab fa-vine"></i>
						<i className="fab fa-youtube"></i>
					</div>
				</div>
				</div>
			</div>
		);
	}
}