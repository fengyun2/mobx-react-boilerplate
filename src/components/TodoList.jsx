import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { inject, observer } from 'mobx-react'

import Todo from './Todo'

@inject('store') // 注入store
@observer
class TodoList extends React.Component {
  @observable newTodoTitle = ''
  constructor(props) {
    super(props)
    this.store = props.store.todos
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input type="text" value={this.newTodoTitle} onChange={this.handleInputChange} />
          <button type="submit">Add</button>
        </form>
        <hr />
        <ul>{this.store.todos.map(todo => <Todo todo={todo} key={todo.id} />)}</ul>
        Tasks left: {this.store.unfinishedTodoCount}
      </div>
    )
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value
  }

  @action
  handleFormSubmit = e => {
    this.store.addTodo(this.newTodoTitle)
    this.newTodoTitle = ''
    e.preventDefault()
  }
}

export default TodoList
