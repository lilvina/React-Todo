import React from 'react';

function Todo(props) {
  return(
    <div className="item">
      <p id={props.id}>{props.task}</p>
    </div>
  )
}

export default Todo
