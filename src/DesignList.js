import React, { Component } from 'react';
import Design from './Design'
import './App.css'

class DesignList extends Component{
  render() {
      let designNodes = this.props.data.map(design => {
        return (
          <Design
            designer={ design.designer }
            uniqueID = { design['_id']}
             text={design.text}
             imageURL={design.imageURL}
             material={design.material}
             inspiration={design.inspiration}
             onDesignDelete={ this.props.onDesignDelete }
             onDesignUpdate={ this.props.onDesignUpdate}
             key={ design['_id']} >

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
