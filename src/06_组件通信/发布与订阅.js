import React, { Component } from 'react'

export default class app extends Component {
  render() {
    return (
      <div>app</div>
    )
  }
}

var bus = {
    list:[],
    // 订阅
    subscribe(callback) {
        this.list.push(callback)
    },
    // 发布
    publish(value) {
        this.list.forEach(callback => {
            callback&&callback(value)
        })
    }
}

bus.subscribe((value) => {
    console.log("111111111 "+value);
})
bus.subscribe((value) => {
    console.log("222222222 "+value);
})


bus.publish("发布信息")

