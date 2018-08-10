import React, { Component } from 'react';
import Navbar from './navbar';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
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
					<Map google={this.props.google} zoom={14}>
	
						<Marker onClick={this.onMarkerClick}
									name={'Current location'} />
	
						<InfoWindow onClose={this.onInfoWindowClose}>
							<div>
								<h1>{this.state.selectedPlace.name}</h1>
							</div>
						</InfoWindow>
					</Map>
				</div>
				<div>
					Phone number and hours
				</div>
			</div>
		);
	}
}

export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapContainer)