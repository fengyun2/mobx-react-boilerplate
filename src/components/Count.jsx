import React from 'react'
import {observer} from 'mobx-react'

@observer
class Count extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.store.num}</p>
        <button onClick={this.props.store.addNum}>+1</button>
        <button onClick={this.props.store.reduceNum} disabled={this.props.store.num < 1}>-1</button>
      </div>
    )
  }
}

export default Count