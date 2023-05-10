
import React, { Component } from 'react'

import axios from "axios";
export default class Cinema extends Component {
    constructor() {
        super()
        this.state = {
            cinemaList: [],
            oldList:[]
        }
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',

                'X-Host': 'mall.film-ticket.cinema.list'

            }
        }).then(res => {
            this.setState({
                cinemaList: res.data.data.cinemas,
                oldList:res.data.data.cinemas
            })
            console.log(this.state.cinemaList);
        })
    }
     
    // 简易模糊搜索方法
    handleInput(e) {
        console.log(e.target.value);
        let newList = this.state.cinemaList.filter(item => {
            return item.name.toUpperCase().includes(e.target.value.toUpperCase())
        })
        console.log(newList);
        this.setState({ cinemaList: newList })
        if (e.target.value === "") {
            this.setState({ cinemaList: this.state.oldList })
        }
        console.log("------",this.state.cinemaList);
    }
    render() {
        return (
            <div>
                <input onInput={this.handleInput.bind(this)} />
                {
                    this.state.cinemaList.map(item => {
                        return (<dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>)
                    })
                }
            </div>
        )
    }
}
