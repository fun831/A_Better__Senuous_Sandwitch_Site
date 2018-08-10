import React, { Component } from 'react';
import Navbar from './navbar';
import FooterPage from './testfooter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>Sensuous Sandwich!</h1>
        <FooterPage/>
      </div>
    );
  }
}
