import React, { Component } from 'react';
import Design from './Design'

class DesignList extends Component{
  render() {
      let designNodes = this.props.data.map(design => {
        return (
          <Design designer={ design.designer } text={design.text} key={ design['_id']} >

          </Design>
        )
      })
      return (
        <div>
          { designNodes }
        </div>
      )
  }
}

export default DesignList;
