import axios from 'axios'
import React, { Component } from 'react'
import "./css/index.css"
export default class app extends Component {
    constructor() {
        super()
        this.state = {
            filmsList: [],
            detilInfo: []
        }
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
                    <FilmsItem item={this.state.filmsList} onEvent={(value) => {
                        this.setState({
                            detilInfo: value
                        })
                    }} />
                    <FilmsDetil detail={this.state.detilInfo} />
                </ul>
            </div>
        )
    }
}

class FilmsItem extends Component {
    render() {
        return (
            <div>
                {
                    this.props.item.map(item => {
                        return (
                            <div key={item.filmId} className='box' onClick={
                                () => {
                                    this.props.onEvent(item.synopsis)
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

class FilmsDetil extends Component {
    render() {
        return (
            <div className='Detil-box'>
                <ul>
                    {this.props.detail}
                </ul>
            </div>
        )

    }
}
