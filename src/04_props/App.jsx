import React, { Component } from 'react'
import Navber from "./Navber";
export default class App extends Component {
    obj = {
        text: "xxxx",
        name:'sss'
    }
    render() {
        return (
            <div>
                App
                <h5>首页</h5>
                <Navber title="首页" left={true} />
                <h5>导航</h5>
                <Navber title="导航" {...this.obj} />
                <h5>个人中心</h5>
                <Navber title="个人中心" />
            </div>
        )
    }
}
