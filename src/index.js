import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
// import DevTools from 'mobx-react-devtools'

import * as stores from './models'
import App from './containers/App'
// import TodoList from './components/TodoList'
// import TodoListModel from './models/TodoListModel'

// import Count from './components/Count'
// import CountModel from './models/CountModel'

// const store = new TodoListModel()
// const countStore = new CountModel()

render(
  <Provider store={stores}>
    <Router>
      {/* <DevTools /> */}
      <App />
      {/* <Count /> */}
    </Router>
  </Provider>,
  document.getElementById('root')
)

// store.addTodo('Get Coffee')
// store.addTodo('Write simpler code')
// store.addTodo('吃饭')
// store.addTodo('睡觉')
// store.todos[0].finished = true

// setTimeout(() => {
//   store.addTodo('Get a cookie as well')
// }, 2000)

// playing around in the console
// window.store = store
