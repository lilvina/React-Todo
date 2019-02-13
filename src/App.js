import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: [],
      task: '',
      completed: false
    }
  }

  addTodos = event => {
    event.preventDefault()

    const newTodos = {
      task: this.state.task,
      id: Date.now()
    }
    this.setState({
      todos: [...this.state.todos, newTodos],
      task: ''
    })
  }

  handleTodos = event => {
    console.log(this.state.task)
    this.setState({
      task: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>My TodoList</h3>
        <TodoList todos={this.state.todos} />
        <TodoForm onSubmit={this.addTodos} onChange={this.handleTodos} value={this.state.task} />
      </div>
    )
  }
}

export default App;
