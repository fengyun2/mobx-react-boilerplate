import { observable, computed, action } from 'mobx'

import TodoModel from './TodoModel'

class TodoListModel {
  @observable todos = []

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(title))
  }
}
export default new TodoListModel()
