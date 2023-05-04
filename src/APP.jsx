import React from "react";
import Test from "./components/test";

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
            </div>
        )
    }
}