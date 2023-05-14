import React from "react";
export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "hell App",
            index: 1
        }
    }
    handleClick() {
        // setstate处在同步的逻辑中，异步更新状态，更新真实donm
        // setstate处在异步的逻辑中，同步更新状态，同步更新真实dom
            //异步执行
        /* setTimeout(() => {
            this.setState({
                index: this.state.index + 1
            },)
            console.log(this.state.index);

            this.setState({
                index: this.state.index + 1
            })
            console.log(this.state.index);

            this.setState({
                index: this.state.index + 1
            })
            console.log(this.state.index);
        }, 0) */

        this.setState({
            index: this.state.index + 1
        }, () => {
            
            console.log(this.state.index);
        })
    }
    render() {
        return (
            <div>
                <h4>{this.state.index}</h4>
                <button onClick={this.handleClick.bind(this)}>点击</button>
            </div>
        )
    }
}