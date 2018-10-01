import {observable, action} from 'mobx'

export default class CountState {
  @observable num = 0
  @action addNum = () => {
    this.num++
  }
  @action reduceNum = () => {
    this.num--
  }
}