import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class app extends Component {
    state = {
        list: ["111", "222", "333", "444", "454", "544", "44545", "6487"]
    }
    componentDidMount() {
        new BetterScroll("#wrapper")
    }
    render() {
        return (
            <div>
                <div>
                    <div id='wrapper' style={{ height: "100px", overflow: "hidden", background: "green" }} >
                        <div>
                            {
                                this.state.list.map(item => <li key={item}>{item}</li>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
