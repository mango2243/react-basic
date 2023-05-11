import React, { Component } from 'react'

export default class app extends Component {
    state = {
        name: "mango",
        myage: 100
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        name: "xiaoming"
                    })
                }}>click</button>
                app--{this.state.name}--{this.state.myage}
            </div>
        )
    }
    static getDerivedStateFromProps(nextProps,nextState) {
        return {
            name:nextState.name.substring(0,1).toUpperCase()+nextState.name.substring(1)
        }
    }
}
