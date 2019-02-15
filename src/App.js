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

    if(this.state.task === '') return;

    const newTodos = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodos],
      task: ''
    })
  }

  handleTodos = event => {
    //console.log(this.state.task)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clickList = event => {
    let clickListId = parseFloat(event.target.id)
    this.state.todos.forEach(item => {
      if(clickListId === item.id) {
        item.completed = !item.completed
      }
    })
    event.target.classList.toggle('completed')
  }

  clearTodo = event => {
    event.preventDefault()
    this.setState({
      todos: this.state.todos.filter(item => item.completed === false)
    })
  }

  render() {
    return (
      <div className="todo-container">
        <h3>My TodoList</h3>
        <div className="list" onClick={this.clickList}>
          <TodoList todos={this.state.todos} />
        </div>
        <TodoForm onSubmit={this.addTodos} onChange={this.handleTodos} value={this.state.task} clearTodo={this.clearTodo}/>
      </div>
    )
  }
}

export default App;
