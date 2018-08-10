import React, { Component } from 'react';
import Navbar from './navbar';
import Iframe from 'react-iframe'

class Locations extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
		return (
			<div className=''>
				<Navbar/>
        <div>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.3775424294654!2d-111.8979740481575!3d40.42797106055621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d8554c917de07%3A0x865ac5eda44125a!2sBottega!5e0!3m2!1sen!2sus!4v1533928346910"
          width="450px"
          height="450px"
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

export default Locations