import React, { Component } from 'react'

export default class app extends Component {
    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    myref = React.createRef()
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        list: [...[10, 11, 12, 13, 14, 15, 16], ...this.state.list]
                    })
                }}>发送邮件</button>
                <h5>邮箱</h5>
                <ul style={{ height: "200px", overflow: "auto", background: "yellow" }} ref={this.myref}>
                    {
                        this.state.list.map(item =>
                            <li key={item} style={{ height: "100px" }}>{item}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
    // 在render之后执行,在更新componentDidUpdate勾子之前执行
    getSnapshotBeforeUpdate() {
        console.log(this.myref.current.scrollHeight);
        return this.myref.current.scrollHeight
    }

    componentDidUpdate(prevProps,prevState,value) {
        this.myref.current.scrollTop+=this.myref.current.scrollHeight-value
    }
}
