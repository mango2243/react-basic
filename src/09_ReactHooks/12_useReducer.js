import React from 'react'
import { useReducer } from 'react'

const reducer = (prevState, action) => {
    let newList = { ...prevState }
    switch (action.type) {
        case "minus":
            newList.count--
            return newList

        case "add":
            newList.count++
            return newList
        
        default:
            return prevState
    }
}
// 定义在外部状态
const intialState = {
    count: 1,
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "minus"
                })
            }}>-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: "add"
                })
            }}>+</button>
        </div>
    )
}
