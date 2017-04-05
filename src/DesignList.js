import React, { Component } from 'react';
import Design from './Design'

class DesignList extends Component{
  render() {
      let designNodes = this.props.data.map(design => {
        return (
          <Design
            designer={ design.designer }
            uniqueID = { design['_id']}
             text={design.text}
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
