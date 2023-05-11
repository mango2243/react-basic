import axios from 'axios';
import React, { Component } from 'react'
import BetterScroll from "better-scroll"
export default class app extends Component {
    state = {
        name: "mango",
        list:[]
    }
    componentDidMount() {
        axios.get("/test.json").then(res => {
            this.setState({
                list:res.data.data.films
            }, () => {
                new BetterScroll("#warpper")
            }) 
        })
    }
    render() {
        console.log("render");
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        name:"lemon"
                    })
                }}>click</button>
                {this.state.name}
                <div id="warpper" style={{ height: "100px", overflow: "hidden", background: "green" }}>
                    <ul>
                        {this.state.list.map(item => {
                            return (
                                <li key={item.filmId}>{ item.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    // 已经更新页面（旧属性，旧状态）
    componentDidUpdate(prevPropos, prevState) {
        if (prevState.list.length === 0) {
           new BetterScroll("#warpper")
       }
    }
}
