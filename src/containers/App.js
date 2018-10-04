import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import DevTools from 'mobx-react-devtools'

import Main from './../routers'

@withRouter
@inject('store') // 注入store
@observer
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Main />
        <DevTools />
      </div>
    )
  }
}

export default App
