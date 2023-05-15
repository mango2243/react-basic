import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function App() {
    const myref=useRef()
    const [text, settext] = useState("");
    const [list, setlist] = useState([]);

    // useRef定义一个变量
    let count = useRef(0)
    
    const handler = (evt) => {
        settext(myref.current.value)
    }
    const addList = () => {
        count.current++
        setlist([...list, text])
        settext("")
    }
    const deleteItem = (index) => {
        console.log(index);
        var newList = [...list]
        newList.splice(index, 1)
        setlist(newList)
    }
    
    return (
        <div>
            <input onChange={handler} value={text} ref={myref} />
            <button onClick={addList}>add</button>
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
            {!list.length && <div>暂无待办事项</div>}
            {count.current}
        </div>
    )
}
