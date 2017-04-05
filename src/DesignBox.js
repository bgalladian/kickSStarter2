import React, { Component } from 'react';
import axios from 'axios';
import DesignList from './DesignList';
import DesignForm from './DesignForm'


class DesignBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadDesignsFromServer = this.loadDesignsFromServer.bind(this);
    this.handleDesignSubmit = this.handleDesignSubmit.bind(this);
  }
  loadDesignsFromServer() {
    axios.get(this.props.url).then(res => {
      this.setState({ data: res.data})
    })
  }

  handleDesignSubmit(design) {
    let designs = this.state.data;
    design.id = Date.now();
    let newDesigns = designs.concat([design]);
    this.setState({ data: newDesigns });
    axios.post(this.props.url, design)
      .catch(err => {
        console.error(err);
        this.setState({ data: designs });
      });
  }
  componentDidMount() {
    this.loadDesignsFromServer();
    setInterval(this.loadDesignsFromServer, this.props.pollInterval)
  }

  render(){
    return(
      <div>
        <h2>Designs:</h2>
        <DesignList data={ this.state.data }/>
        <DesignForm onDesignSubmit={this.handleDesignSubmit}/>
      </div>
    )
  }
}

export default DesignBox
