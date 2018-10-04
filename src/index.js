import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react'

import * as stores from './models'
import App from './containers/App'
import './styles/main.scss'

render(
  <Provider store={stores}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// playing around in the console
// window.store = store
