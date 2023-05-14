import React, { useState } from 'react'

export default function App() {
    // useState 记忆函数
    const [count, setcount] = useState(0);
    var mycount=20
    return (
        <div>
            <button onClick={() => {
                setcount(count + 1)
                // 重新执行App组件，重新渲染页面
                mycount++ //不会更新
            }}>add</button>
            {count}--{mycount}
        </div>
    )
}
