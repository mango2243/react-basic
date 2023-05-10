import React, { Component } from 'react'

class Filde extends Component {
    render() {
        return <div style={{ background: "green" }}>
            <label >{this.props.label}</label>
            <input type={this.props.type} onChange={
                (evt) => {
                    // console.log(evt.target.value);
                    this.props.onChangeClick(evt.target.value)
                }
            } value={ this.props.value} />
        </div>
    }
}
export default class app extends Component {
    state = {
        uesrname:localStorage.getItem('username'),
        password:"",
    }
    render() {
        return (
            <div>
                <Filde label="用户名" type="text" onChangeClick={(value) => {
                    this.setState({
                        uesrname: value
                    })
                }} value={this.state.uesrname} />
                <Filde label="密码" type="password" onChangeClick={(value) => {
                    this.setState({
                        password:value
                    })
                }} value={this.state.password} />

                <button>确认</button>
                <button onClick={() => {
                    localStorage.removeItem('username')
                    this.setState({
                        uesrname: "",
                        password:""
                    })
                }}>取消</button>
            </div>
        )
    }
}
