// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

// const todos = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   },
//   {
//     task: 'Cooking Chicken',
//     id: 1528817077385,
//     completed: false
//   }
// ]

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
