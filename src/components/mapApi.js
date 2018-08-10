import React, { Component } from 'react';
import Navbar from './navbar';
import Iframe from 'react-iframe'

class MapApi extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
		return (
			<div className=''>
				<Navbar/>
        <div>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403620.1457276272!2d-122.13293706834925!3d37.78342139039131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f80b3abdfe875%3A0x1c83a4c62b1428a4!2sHenry&#39;s+Gallery+Cafe!5e0!3m2!1sen!2sus!4v1533934397467"
          width="400px"
          height="400px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen/>
        </div>
			</div>
		);
	}
}

export default MapApi
