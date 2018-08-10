import React, { Component } from 'react';

class SandwichItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (      
        <div className="sandwich_list">
            
            <h3 className="h1">{this.props.title}</h3>
            <p className="description_text">{this.props.description}</p>
        </div>    
    );
  }
}

export default SandwichItem;