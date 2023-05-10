import React, { Component } from 'react'
import '../css/02-maizuo.css'
import Center from "./Center";
import Cinema from "./scroll";
import Film from "./Film";
export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                text: "电影"
            },
            {
                id: 2,
                text: "影院"
            },
            {
                id: 3,
                text: "我的"
            }
        ],
        current: 0
    }
    witch() {
        switch (this.state.current) {
            case 0:
                return <Film />
                break;
            case 1:
                return <Cinema />
                break
            case 2:
                return <Center />
                break
            default:
                return "NULL"
        }
    }
    render() {
        return (
            <div>
                {
                    this.witch()
                }
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id} className={this.state.current === index ? 'active' : ''} onClick={() => this.handleClick(index)}>{item.text}</li>
                        )
                    }
                </ul>
            </div>)
    }

    handleClick(index) {
        console.log(index)

        this.setState({
            current: index
        })
    }
}
