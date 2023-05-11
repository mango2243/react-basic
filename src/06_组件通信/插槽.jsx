import React, { Component } from 'react'

export default class app extends Component {
    render() {
        return (
            <div>
                <Child >
                    <div>1111111</div>
                    <div>222222222</div>
                    <div>333333333</div>
                </Child >
            </div>
        )
    }
}


// 孩子组件
class Child extends Component {
    render() {
        return (
            <div>
                {this.props.children[0]}
                {this.props.children[2]}
                chrod
                {this.props.children[1]}
                
            </div>
        )
    }
}