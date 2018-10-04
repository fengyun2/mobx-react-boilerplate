import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import Main from './../routers'

@withRouter
@inject('store') // 注入store
@observer
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Main />
      </div>
    )
  }
}

export default App
