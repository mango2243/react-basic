import axios from 'axios'
import React, { Component } from 'react'
import "./css/index.css"
const GolbelContext = React.createContext()

export default class app extends Component {
    constructor() {
        super()
        this.state = {
            filmsList: [],
            detilInfo: [],
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
            <GolbelContext.Provider value={{
                call: "打电话",
                sms: "短信",
                detilInfo:this.state.detilInfo,
                changInfo:(value)=> {
                    this.setState({
                        detilInfo:value
                    })
                }
            }}>
                <div>
                    <ul className='ul'>
                        <FilmsItem item={this.state.filmsList} />
                        <FilmsDetil />
                    </ul>
                </div>
            </GolbelContext.Provider>
        )
    }
}

class FilmsItem extends Component {
    render() {
        return (
            <GolbelContext.Consumer>
                {
                    (value) => {
                        return <div>{
                            this.props.item.map(item => {
                                return (
                                    <div key={item.filmId} className='box' onClick={() => {
                                       value.changInfo(item.synopsis)
                                    }}>
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
                    }
                }
            </GolbelContext.Consumer>
        )
    }
}

class FilmsDetil extends Component {
    render() {
        return (
            <GolbelContext.Consumer>
                {
                    (value) => {
                        return <div className='Detil-box'>
                            <ul>
                                {value.detilInfo}
                            </ul>
                        </div>
                    }
                }
            </GolbelContext.Consumer>
        )

    }
}

