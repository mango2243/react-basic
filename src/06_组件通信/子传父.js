import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    console.log("发送请求", this.props.event);
                    this.props.event()
                }}>切换</button>
                <span>Navbar</span>
            </div>
        )
    }
}

class SiderBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>3333333333</li>
                    <li>3333333333</li>
                    <li>3333333333</li>
                    <li>3333333333</li>
                    <li>3333333333</li>
                    <li>3333333333</li>
                    <li>3333333333</li>
                    <li>3333333333</li>
                    <li>3333333333</li>
                    <li>3333333333</li>
                    <li>3333333333</li>
                    <li>3333333333</li>
                </ul>
            </div>
        )
    }
}

export default class APP extends Component {
    state = {
        isShow: true,
    }
    handle=()=> {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        return (
            <div>
                <NavBar event={this.handle} />
                {(this.state.isShow && <SiderBar />)}
            </div >
        )
    }
}
