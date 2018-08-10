import React, { Component } from 'react';
import Navbar from './navbar';

export default class Homepage extends Component {
	 render() {
		return (
			<div className='homepage'>
				<div className='greeting'>
					<h1>Welcome to Sensuous Sandwiches! Thanks for visiting!!</h1>
					<p>At Sensuous Sandwiches we believe in using only the finest quality, freshest ingredients.</p>
					<img src="https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/04/main/blackened-grouper-sandwiches-1706p35.jpg?itok=2kkffafu" alt="sandwich pic" className="main-pic"/>
					<div className="social">
						<i class="fab fa-instagram"></i>
						<i class="fab fa-twitter"></i>
						<i class="fab fa-snapchat-ghost"></i>
						<i class="fab fa-facebook"></i>
						<i class="fab fa-linkedin"></i>
						<i class="fab fa-google-plus-square"></i>
						<i class="fab fa-vine"></i>
						<i class="fab fa-youtube"></i>
					</div>
				</div>
			</div>
		);
	}
}