// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todos.map(item => {
        return (
          <Todo task={item.task} id={item.id} key={item.id} />
        )
      })}
    </div>
  )
}

export default TodoList;
