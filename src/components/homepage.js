import React, { Component } from "react";

import SlideShow from "./slideShow";
import Navbar from "./navbar";
import FooterPage from "./testfooter";

export default class Homepage extends Component {
	render() {
		return (
			<div className="homepage">
				<Navbar />
				<div className="greeting">
					<h1>Welcome to Sensuous Sandwiches! Thanks for visiting!!</h1>
					<p>
						At Sensuous Sandwiches we believe in using only the finest quality,
						freshest ingredients.
					</p>
					<SlideShow />
					<div className="social">
						<i className="fab fa-instagram" />
						<i className="fab fa-twitter" />
						<i className="fab fa-snapchat-ghost" />
						<i className="fab fa-facebook" />
						<i className="fab fa-linkedin" />
						<i className="fab fa-google-plus-square" />
						<i className="fab fa-vine" />
						<i className="fab fa-youtube" />
					</div>
				</div>
				<FooterPage />
			</div>
		);
	}
}
