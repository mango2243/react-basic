import React from "react";

export default class Test extends React.Component{
    constructor() {
        super()
        this.state = {
            message:"hell test component"
        }
    }

    render() {
        return (
            <div>
                {this.state.message}
            </div>
        )
    }
}