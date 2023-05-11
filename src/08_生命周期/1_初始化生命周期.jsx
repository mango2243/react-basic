import React, { Component } from 'react'

export default class app extends Component {
    state = {
        name: "mango",
        list:["111","222","333","444","555"]
    }
    //将要挂载（初始化数据，拿不到DOM节点）
    UNSAFE_componentWillMount() {
        console.log("will mount");
        // 挂载前最后一次修改
        this.setState({
            name: "lemon"
        })
    }
    
    // 已经挂载
    componentDidMount() {
        /* 数据请求axios
        订阅函数调用
        setInterval
        基于创建的完的dom进行操作*/
        console.log("did mount");
    }

    // 渲染
    render() {

        console.log("render");
        return (
            <div className='name'>{this.state.name}</div>
        )
    }
}
