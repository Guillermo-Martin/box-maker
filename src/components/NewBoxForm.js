import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
  state = {
    height: "",
    width: "",
    color: "",
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  // function calls addInfo function from BoxList component (the parent)
  handleSubmit = event => {
    event.preventDefault();
    // adding uuid:  create a new variable that will contain the new info, spread out the state, then add the id
    // then pass it to the addInfo function
    const newInfo = {...this.state, id: uuidv4()}  // <--- now the box info will contain an id

    // addInfo function is from the parent
    this.props.addInfo(newInfo);
    this.setState({height: "", width: "", color: ""});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="height">Height: </label>
          <input 
            type="text"
            id="height"
            name="height"
            value={this.state.height}
            onChange={this.handleInputChange}
          />

          <br />

          <label htmlFor="width">Width: </label>
          <input 
            type="text"
            id="width"
            name="width"
            value={this.state.width}
            onChange={this.handleInputChange}
          />

          <br />

          <label htmlFor="color">Color: </label>
          <input 
            type="text"
            id="color"
            name="color"
            value={this.state.color}
            onChange={this.handleInputChange}
          />

          <br />

          <button>Create Box</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
