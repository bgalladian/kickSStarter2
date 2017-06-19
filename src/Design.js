import React, { Component } from 'react';
import DesignList from './DesignList'
import './App.css'



class Design extends Component {
  constructor(props) {
    super(props)
    this.state={
      toBeUpdate: false,
      designer: '',
      text: '',
      imageURL: '',
      material: '',
      inspiration: ''
    }
    this.deleteDesign = this.deleteDesign.bind(this);
    this.updateDesign = this.updateDesign.bind(this);
    this.handleDesignerChange = this.handleDesignerChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleImageURLChange = this.handleImageURLChange.bind(this);
    this.handleMaterialChange = this.handleMaterialChange.bind(this);
    this.handleInspirationChange = this.handleInspirationChange.bind(this);
    this.handleDesignUpdate = this.handleDesignUpdate.bind(this);
  }

  updateDesign(e) {
    e.preventDefault()
    this.setState({ toBeUpdated: !this.state.toBeUpdated})
  }

  handleDesignUpdate(e) {
   e.preventDefault();
   let id = this.props.uniqueID;

   let designer = (this.state.designer) ? this.state.designer : null;
   let text = (this.state.text) ? this.state.text : null;
   let imageURL = (this.state.imageURL) ? this.state.imageURL : null;
   let material = (this.state.material) ? this.state.material : null;
   let inspiration = (this.state.inspiration) ? this.state.inspiration : null;
   let design = { designer: designer, text: text, imageURL: imageURL, material: material, inspiration: inspiration};
   this.props.onDesignUpdate(id, design);
   this.setState({
     toBeUpdated: !this.state.toBeUpdated,
     designer: '',
     text: '',
     imageURL: '',
     material: '',
     inspiration: ''
   })
 }

 deleteDesign(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onDesignDelete(id);
  }

  handleDesignerChange(e) {
   this.setState({ designer: e.target.value });
 }

  handleTextChange(e) {
   this.setState({ text: e.target.value });
 }

 handleImageURLChange(e) {
  this.setState({ imageURL: e.target.value });
}
 handleMaterialChange(e) {
  this.setState({ material: e.target.value });
}
 handleInspirationChange(e) {
  this.setState({ inspiration: e.target.value });
}

render() {
  return (

    <div>

      <div className="designs">
        <h3>Designer: {this.props.designer}</h3>
        <p><strong>Name: </strong>{this.props.text}</p>
        <p><strong>Material: </strong>{this.props.material}</p>
        <p><strong>Inspiration: </strong>{this.props.inspiration}</p><br/>
        <img src={this.props.imageURL}></img><br/>
        <button onClick={ this.updateDesign }>Update</button>
        <button onClick={ this.deleteDesign}>Delete</button>

        { (this.state.toBeUpdated)
          ? (<form onSubmit={ this.handleDesignUpdate }>
            <p>Designer:</p>
              <input
                type='text'
                placeholder={this.props.designer}
                value={ this.state.designer }
                onChange= { this.handleDesignerChange } /><br/>
              <p>Name of Design:</p>
              <input
                type='text'
                placeholder={this.props.text}
                value={ this.state.text }
                onChange={ this.handleTextChange } /><br/>
              <p>Image URL:</p>
              <input
                type='text'
                placeholder={this.props.imageURL}
                value={ this.state.imageURL }
                onChange={ this.handleImageURLChange } /><br/>
              <p>Material:</p>
              <input
                type='text'
                placeholder={this.props.material}
                value={ this.state.material }
                onChange={ this.handleMaterialChange } /><br/>
              <p>Inspiration:</p>
              <input
                type='text'
                placeholder={this.props.inspiration}
                value={ this.state.inspiration }
                onChange={ this.handleInspirationChange } /><br/>
              <input
                type='submit'
                value='Update' />
            </form>)
          : null}
          </div>
  </div>
    )
  }
}
export default Design;
