import React from "react";

const Delete = (props) => {
  
  return <>
  <button onClick={() => props.deleteData(props.i)}>delete</button>
  </>;
};

export default Delete;
