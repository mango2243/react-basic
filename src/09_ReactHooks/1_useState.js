import React , { useState }from 'react'

export default function App() {
    const [name, setName] = useState("mango");
    const [age, setage] = useState(21);
  return (
      <div>
          <button onClick={() => {
              setName("lemon")
          }}>切换</button>
          app-{name}--{age}
    </div>
  )
}
