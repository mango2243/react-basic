import React, { Component } from 'react'
import check from "prop-types";
export default class Navber extends Component {
    static propTypes = {
        title: check.string,
        left:check.bool
    }
    static defaultProps = {
        left:true
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {
                    (this.props.left&&<button>左边</button>)
                }
                Navber--{this.props.title}
                {
                    <div>{this.props.name}--{ this.props.text}</div>
                }
            </div>
        )
    }  
}



