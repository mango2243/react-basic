import React, { Component } from 'react'

class Filde extends Component {
    state = {
        value: ""
    }
    clear() {
        this.setState({
            value: ""
        })
    }
    render() {
        return <div style={{ background: "green" }}>
            <label >{this.state.label}</label>
            <input type={this.props.type} onChange={
                (evt) => {
                    this.setState({
                        value: evt.target.value
                    })
                }
            } value={this.state.value} />
        </div>
    }
}
export default class ref extends Component {
    username = React.createRef()
    password = React.createRef()
    render() {
        return (
            <div>
                <Filde label="用户名" type="text" ref={this.username} />
                <Filde label="密码" type="password" ref={this.password} />
                <button onClick={() => {
                    console.log("用户名:"+this.username.current.state.value);
                }}>确认</button>
                <button onClick={() => {
                    this.password.current.clear()
                    this.username.current.clear()
                }}>取消</button>
            </div>
        )
    }
}
