import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('store') // 注入store
@observer
class Count extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store.count
  }
  render() {
    return (
      <div>
        <p>{this.store.num}</p>
        <button onClick={this.store.addNum}>+1</button>
        <button onClick={this.store.reduceNum} disabled={this.store.num < 1}>
          -1
        </button>
      </div>
    )
  }
}

export default Count
