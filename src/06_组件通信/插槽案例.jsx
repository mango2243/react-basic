import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div>
                {this.props.children}
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
                <NavBar>
                    <button onClick={() => {
                       this.handle()
                    }}>切换</button>
                </NavBar>
                {(this.state.isShow && <SiderBar />)}
            </div >
        )
    }
}
