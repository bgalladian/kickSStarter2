import React, { Component } from 'react';


class DesignForm extends Component {
  constructor(props) {
    super(props);
    this.state = { designer: '', text: ''}
    this.handleDesignerChange = this.handleDesignerChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDesignerChange(e){
    this.setState({designer: e.target.value});
  }

  handleTextChange(e){
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
   e.preventDefault();
   let designer = this.state.designer.trim();
   let text = this.state.text.trim();
   if (!text || !designer) {
     return;
   }
   this.props.onDesignSubmit({ designer: designer, text: text})
   this.setState({ designer: '', text:''})
 }

  render() {
    return(
      <form>
        <input
          type='text'
          placeholder='Your Name'
          value={ this.state.designer }
          onChange={this.handleDesignerChange } />
        <input
          type='text'
          placeholder='Your Comment'
          value={ this.state.text }
          onChange={this.handleTextChange } />
        <input
          type='submit'
          value="Post" />
      </form>
    )
  }
}

export default DesignForm
