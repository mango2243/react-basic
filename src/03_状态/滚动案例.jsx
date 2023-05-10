import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
export default class App extends Component {
    state = {
        list: []
    }
    handleClick() {
        let list = [1, 5, 4, 4, 566, 55, 22, 454, 41, 8, 8, 51]
        this.setState({
            list: list
        }, () => {
            new BetterScroll(".wrapper")
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.handleClick()}>点击渲染</button>
                <div className='wrapper' style={{ height: '100px', backgroundColor: 'red', overflow: 'hidden' }}>
                    <ul className='content' >
                        {
                            this.state.list.map(item => {
                                return (
                                    <li key={item}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
