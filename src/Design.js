import React, { Component } from 'react';
import './DesignBox.css'


class Design extends Component {
  constructor(props) {
    super(props)
    this.state={
      toBeUpdate: false,
      designer: '',
      text: '',
      imageURL: ''
    }
    this.deleteDesign = this.deleteDesign.bind(this);
    this.updateDesign = this.updateDesign.bind(this);
    this.handleDesignerChange = this.handleDesignerChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
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
   let design = { designer: designer, text: text};
   this.props.onDesignUpdate(id, design);
   this.setState({
     toBeUpdated: !this.state.toBeUpdated,
     designer: '',
     text: ''
   })
 }

 deleteDesign(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onDesignDelete(id);
    console.log('oops deleted');
  }

  handleTextChange(e) {
   this.setState({ text: e.target.value });
 }

 handleDesignerChange(e) {
  this.setState({ designer: e.target.value });
}

render() {
  return (
    <div>
      <h3>{this.props.designer}</h3>
      <p>{this.props.text}</p>


      <button onClick={ this.updateDesign }>update</button>
      <button onClick={ this.deleteDesign}>delete</button>
      { (this.state.toBeUpdated)
        ? (<form onSubmit={ this.handleDesignUpdate }>
            <input
              type='text'
              placeholder='Update name...'
              value={ this.state.designer }
              onChange= { this.handleDesignerChange } />
            <input
              type='text'
              placeholder='Update your comment.'
              value={ this.state.text }
              onChange={ this.handleTextChange } />
            <input
              type='submit'
              value='Update' />
          </form>)
        : null}
    </div>
  )
}
}
export default Design;
