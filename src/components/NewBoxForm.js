import React, { Component } from 'react';

class NewBoxForm extends Component {
  state = {
    height: "",
    width: "",
    color: ""
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addInfo(this.state);
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
