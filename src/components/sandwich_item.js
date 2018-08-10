import React, { Component } from 'react';

class SandwichItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (      
        <div className="sandwich_list">
            
            <h3 className="premium_sandwhich">{this.props.title}</h3>
            <p className="premium_description">{this.props.description}</p>
        </div>    
    );
  }
}

export default SandwichItem;