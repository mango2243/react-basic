import React, { Component } from 'react'

class Child extends Component {
    state = {
        title: ""
    }
    render() {
        return (
            <div>
                child-{this.state.title}
            </div>
        )
    }
    // 父组件修改属性时触发
    UNSAFE_componentWillReceiveProps(nextProps) {
        // this.props.text旧属性
        console.log(nextProps,this.props.text);
        this.setState({
            title:nextProps.text+" lemon"
        })
    }
}
export default class app extends Component {
    state = {
        text:'mango'
    }
    render() {
        return (
            <div>
                <Child text={this.state.text} />
                <button onClick={() => {
                    this.setState({
                        text:"hhh"
                    })
                }}>更改</button>
            </div>
        )
    }
}
