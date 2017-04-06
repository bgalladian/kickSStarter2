import React, { Component } from 'react';
import './App.css'


class DesignForm extends Component {
  constructor(props) {
    super(props);
    this.state = { designer: '', text: '', imageURL: '', material: '', inspiration: '' }
    this.handleDesignerChange = this.handleDesignerChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleImageURLChange = this.handleImageURLChange.bind(this);
    this.handleMaterialChange = this.handleMaterialChange.bind(this);
    this.handleInspirationChange = this.handleInspirationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDesignerChange(e){
    this.setState({designer: e.target.value});
  }

  handleTextChange(e){
    this.setState({text: e.target.value})
  }
  handleImageURLChange(e){
    this.setState({imageURL: e.target.value})
  }
  handleMaterialChange(e){
    this.setState({material: e.target.value})
  }
  handleInspirationChange(e){
    this.setState({inspiration: e.target.value})
  }

  handleSubmit(e) {
   e.preventDefault();
   let designer = this.state.designer.trim();
   let text = this.state.text.trim();
   let imageURL = this.state.imageURL.trim();
   let material = this.state.material.trim();
   let inspiration = this.state.inspiration.trim();
   if (!text || !designer) {
     alert('Please Enter Your Name and the Design Name')
     return;
   }
   this.props.onDesignSubmit({ designer: designer, text: text, imageURL: imageURL, material: material, inspiration: inspiration})
   this.setState({ designer: '', text: '', imageURL:'', material: '', inspiration: '' })
 }

  render() {
    return(
      <form className="addForm">
        <h3><strong>Add your kick!</strong></h3>

        <input
          type='text'
          placeholder='Your Name'
          value={ this.state.designer }
          onChange={this.handleDesignerChange } />
        <input
          type='text'
          placeholder='Name Your Design'
          value={ this.state.text }
          onChange={this.handleTextChange } />
        <input
          type='text'
          placeholder='Image URL'
          value={ this.state.imageURL }
          onChange={this.handleImageURLChange } />
        <input
          type='text'
          placeholder='Material'
          value={ this.state.material}
          onChange={this.handleMaterialChange } />
        <input
          type='text'
          placeholder='Inspiration'
          value={ this.state.inspiration}
          onChange={this.handleInspirationChange } />
        <input
          type='submit'
          onClick={(e) => this.handleSubmit(e)}
          value="Add Your Kick" />
      </form>
    )
  }
}

export default DesignForm
