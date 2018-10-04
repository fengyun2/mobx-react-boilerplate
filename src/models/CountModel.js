import { observable, action } from 'mobx'

class CountModel {
  @observable num = 0
  @action
  addNum = () => {
    this.num++
  }
  @action
  reduceNum = () => {
    this.num--
  }
}

export default new CountModel()
