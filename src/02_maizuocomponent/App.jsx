import React from "react";
import Choose from "./选项卡";
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
                <Choose />
            </div>
        )
    }
}