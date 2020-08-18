import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {

// create method here that will add info from the form 
// it will take the info from form as an argument
// this info will be an object
// method will update state; use callback form

  addInfo = () => {
    alert("I'm connected!")
  }

  render() {
    return (
      <div>
        <NewBoxForm addInfo={this.addInfo} />
        <Box />

      </div>
    );
  }
}

export default BoxList;