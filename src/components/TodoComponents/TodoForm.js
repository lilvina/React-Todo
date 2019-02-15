import React from 'react';

function TodoForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input name="task" value={props.value} onChange={props.onChange} placeholder="a task" type="text" />
      <button>ADD TODO</button>
      <button onClick={props.clearTodo}>Completed</button>
    </form>
  )
}

export default TodoForm;
