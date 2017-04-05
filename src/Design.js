import React, { Component } from 'react';


class Design extends Component {

  render(){
    return(
      <div>
        <h3>{this.props.designer}</h3>
        <p>{this.props.text}</p>

      </div>
    )
  }
}
export default Design;
