import React, { Component } from 'react'

export default class app extends Component {
    state = {
        name: "mango"
    }
    render() {
        console.log("render");
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        name: "lemon"
                    })
                }}>click</button>
                <h5>{this.state.name}</h5>
            </div>
        )
    }

    shouldComponentUpdate(nextProps,nextState) {
        // return false/true
        //this.state 旧状态 nexState 新状态
        
        if (JSON.stringify(this.state) !==JSON.stringify(nextState) ) {
            return true
        }
        return false
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
}
