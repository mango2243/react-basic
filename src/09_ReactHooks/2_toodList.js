import React from 'react'
import { useState } from 'react'

export default function App() {
    const [text, settext] = useState("");
    const [list, setlist] = useState([]);

    const handler = (evt) => {
        settext(evt.target.value)
    }
    const addLsit = () => {
        setlist([...list, text])
    }
    const deleteItem = (index) => {
        console.log(index);
        var newList = [...list]
        newList.splice(index, 1)
        setlist(newList)
    }
    
    return (
        <div>
            <input onChange={handler} value={text} />
            <button onClick={addLsit}>add</button>
            <ul>
                {
                    list.map((item,index) =>
                        <li key={item}>{item}
                            <button onClick={() => {
                                deleteItem(index)
                            }}>del</button>
                        </li>
                    )
                }
            </ul>
            {!list.length&&<div>暂无待办事项</div>}
        </div>
    )
}
