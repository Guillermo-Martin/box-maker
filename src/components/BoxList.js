import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {
  state = {
    boxes: []
  }

// create method here that will add info from the form 
// it will take the info from form as an argument
// this info will be an object ({height, width, color})
// method will update state; use callback form
  addInfo = (info) => {
    this.setState(state => ({
      boxes: [...state.boxes, info]
    }));
  }

  handleDelete = () => {
    alert("I will be deleted");
  }

  render() {
    // for every info object in in the boxes array, render a box with those dimensions
    const allBoxes = this.state.boxes.map(box => 
      <Box
        key={uuidv4()}
        height={box.height}
        width={box.width}
        color={box.color}
        handleDelete={this.handleDelete}
      />    
    )

    return (
      <div>
        {/* Form */}
        <NewBoxForm addInfo={this.addInfo} />
        {/* Display boxes */}
        {allBoxes}
      </div>
    );
  }
}

export default BoxList;