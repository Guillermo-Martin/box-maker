import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


class BoxList extends Component {
  state = {
    boxes: []
  }

// create method here that will add info from the form 
// it will take the info from form as an argument
// this info will be an object ({height, width, color})
// method will update state; use callback form
  addInfo = (info) => {
    // spread out the boxes, then add the new stuff
    this.setState(state => ({
      boxes: [...state.boxes, info]
    }));
  }

  handleDelete = (id) => {
    // filter through boxes array and create a new array of boxes that don't equal the id of the box clicked on
    const afterDelete = this.state.boxes.filter(box => box.id !== id);
    // setState to be the new array
    this.setState({ boxes: afterDelete });
  }

  render() {
    // for every info object in in the boxes array, render a box with those dimensions
    const allBoxes = this.state.boxes.map(box => 
      <Box
        key={box.id}
        id={box.id} // <--- using the id again, but this time it'll be used for deleting
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