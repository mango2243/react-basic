import React from "react";
import Test from "./test";
import Fuction from "./function";
export default class App extends React.Component{
    constructor() {
        super()
        this.state = {
            message:"hell App"
        }
    }
    render() {
        return (
            <div>
                {this.state.message}
                <Test />
                <Fuction />
            </div>
        )
    }
}