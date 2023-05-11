import axios from 'axios'
import React, { Component } from 'react'
import "./css/index.css"

// 调度中心
var bus = {
    list: [],
    // 订阅
    subscribe(callback) {
        this.list.push(callback)
    },
    // 发布
    publish(value) {
        this.list.forEach(callback => {
            callback && callback(value)
        })
    }
}

// 父组件
export default class app extends Component {
    constructor() {
        super()
        this.state = {
            filmsList: [],
        }
    }
    componentDidMount() {
        axios.get(`/test.json`).then(res => {
            this.setState({
                filmsList: res.data.data.films
            })
        }).catch(err => {
            console.log(err.message);
        })
    }
    render() {
        return (
            <div>
                <ul className='ul'>
                    <FilmsItem item={this.state.filmsList} />
                    <FilmsDetil />
                </ul>
            </div>
        )
    }
}

// 电影项目列表
class FilmsItem extends Component {

    render() {
        return (
            <div>
                {
                    this.props.item.map(item => {
                        return (
                            <div key={item.filmId} className='box' onClick={
                                () => {
                                    bus.publish(item.synopsis)
                                }
                            }>
                                <div className='img-box'>
                                    <img src={item.poster} alt="" />
                                    <div className='font'>
                                        {item.name}
                                        <br />
                                        观众评分：{item.grade}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )

    }
}

// 电影简介
class FilmsDetil extends Component {
    constructor() {
        super()
        bus.subscribe((value) => {
            this.setState({
                value: value
            })
        })
        this.state = {
            value: ""
        }
    }
    render() {
        return (
            <div className='Detil-box'>
                <ul>
                    {this.state.value}
                </ul>
            </div>
        )

    }
}
