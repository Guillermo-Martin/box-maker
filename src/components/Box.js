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
    </div>
  );
}

export default Box;