import React, { Component } from 'react';

import Navbar from './navbar';
import Homepage from './homepage';
import FooterPage from './testfooter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
		<Homepage/>
        <FooterPage/>
      </div>
    );
  }
}
