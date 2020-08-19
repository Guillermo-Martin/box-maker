// 1.  create div with a style that will have the dimensions and color
// 2.  pass data from the newboxform to here

import React from 'react';

function Box(props) {
  return (
    <div style={
      {
        height: `${props.height}rem`,
        width: `${props.width}rem`,
        backgroundColor: `${props.color}`
      }}
    >
    <span 
      style={{display: "flex", justifyContent: "flex-end", fontSize: "3rem", color: "red"}}
      onClick={() => props.handleDelete(props.id)} // <--- we're passing in the box's id here
    >
      X
    </span>
    </div>
  );
}

export default Box;