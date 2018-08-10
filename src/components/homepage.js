import React, { Component } from 'react';
import SlideShow from './slideShow';

export default class Homepage extends Component {
	 render() {
		return (
			<div className=''>
				<SlideShow />
				<div>Menu Link</div>
				<div>About Us</div>
			</div>
		);
	}
}