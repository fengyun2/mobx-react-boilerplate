import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TodoList from '../components/TodoList'
import Count from '../components/Count'

const Main = () => (
  <Switch>
    <Route exact path="/" render={props => <TodoList {...props} />} />
    <Route path="/count" component={Count} />
    <Route render={() => <h1>找不到此页面</h1>} />
  </Switch>
)

export default Main
