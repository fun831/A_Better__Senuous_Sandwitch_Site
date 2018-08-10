import React, { Component } from 'react';
import Navbar from './navbar';
import Iframe from 'react-iframe'


export default class Locations extends Component {
	 render() {
		return (
			<div className = "text">
				<Navbar/>

				<h2 className = "title">Our Locations</h2>

					<div className = "addresses">
						<div className = "provo"> 
							<h4>Provo Location</h4>
							<p>1680 S State St Orem, UT 84097-8070</p>
							<p>(801) 377-9244</p>
							<p>Mon-Sat: 10:30am-8pm; Closed Sunday</p>
							<Iframe url= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.8994746928533!2d-111.66377964883583!3d40.23353727458288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9754933ee4f5%3A0xfb413646d0db33c!2s163+W+Center+St%2C+Provo%2C+UT+84601!5e0!3m2!1sen!2sus!4v1533935180421"
								width="350px"
								height="350px"
								id="myId"
								className="myClassname"
								display="initial"
								position="relative"
								allowFullScreen/>
						</div>
						<div className = "orem">
							<h4>Orem Location</h4>
							<p>Downtown 163 West Center Street Provo, UT 84601-4431</p>
							<p>(801) 225-9475</p>
							<p>Mon-Sat: 10:30am-8pm; Closed Sunday</p>
							<Iframe url= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.4224008287697!2d-111.68415004883516!3d40.266366172592974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9a6396ee85f5%3A0x905ba30ad123f142!2s1680+State+St%2C+Orem%2C+UT+84097!5e0!3m2!1sen!2sus!4v1533935323947"
								width="350px"
								height="350px"
								id="myId"
								className="myClassname"
								display="initial"
								position="relative"
								allowFullScreen/>
						</div>
					</div>	
			</div>
		);
	}
	
}

// export default GoogleApiWrapper({
	//   apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
	// })(MapContainer)

