import axios from 'axios'
import React, { Component, useState, useEffect, useContext } from 'react'
import "./css/index.css"
const GolbelContext = React.createContext()

export default function App() {
    const [filmsList, setfilmsList] = useState([]);
    const [info, setinfo] = useState("");
    useEffect(() => {
        axios.get(`/test.json`).then(res => {
            setfilmsList(res.data.data.films)
        })
    }, []);
    return (
        <GolbelContext.Provider value={{
            call: "打电话",
            sms: "短信",
            detilInfo: info,
            changInfo: (value) => {
                setinfo(value)
            }
        }}>
            <div>
                <ul className='ul'>
                    <FilmsItem item={filmsList} />
                    <FilmsDetil />
                </ul>
            </div>
        </GolbelContext.Provider>
    )
}

function FilmsItem(props) {
    const value = useContext(GolbelContext);
    console.log(value);
    return (
        <div>{
            props.item.map(item => {
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
            <audio src="" controls></audio>
        </div>
    )
}

function FilmsDetil() {
    const value = useContext(GolbelContext);
    return <div className='Detil-box'>
        <ul>
            {value.detilInfo}
        </ul>
    </div>
}