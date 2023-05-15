import React from 'react'
import { useState,useEffect } from 'react'

export default function App() {
    const [name, setName] = useState("mango")
    useEffect(() => {
        console.log("useEffect");
    //第一次更新执行一次，之后依赖（name）改变更新也会执行，第二个参数必须填写否则不执行
        setName(name.substring(0,1).toUpperCase()+name.substring(1))
    }, [name]);
    return (
        <div>
            app-{name}
            <button onClick={() => {
                setName("hemon")
            }}>切换</button>
        </div>
    )
}
