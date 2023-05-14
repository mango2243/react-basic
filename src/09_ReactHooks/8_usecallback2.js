import React from 'react'
import { useState,useCallback } from 'react'

export default function App() {
    const [text, settext] = useState("");
    const [list, setlist] = useState([]);
    const [name, setname] = useState("mango");

    const handler = useCallback(
        (evt) => {
            settext(evt.target.value)
        },
        []
    )
    const addLsit = useCallback(
        () => {
            if(text==="") return
            setlist([...list, text])
            console.log("addLsit")
        },
        [list,text]
    )
    const deleteItem = useCallback(
        (index) => {
            console.log(index);
            var newList = [...list]
            newList.splice(index, 1)
            setlist(newList)
            console.log("deleteItem")
        },
        [list]
    )
    
    return (
        <div>
            <div>
                {name}
                <button onClick={() => {
                    setname("lemon")
                }}>切换</button>
            </div>
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
