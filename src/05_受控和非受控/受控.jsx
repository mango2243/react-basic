import React, { Component } from 'react'

export default class 受控 extends Component {
    myref = React.createRef()
    render() {
        return (
            <div>
                <input defaultValue="text" ref={this.myref}/>
            </div>
        )
    }
    
}
