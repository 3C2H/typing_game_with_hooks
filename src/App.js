import React, {useState} from "react"
import "./App.css"


function App() {
  const [text, setText] = useState('')
  
  function handleChange(event) {
    const {value} = event.target
    setText(value)    
  }

  function wordsCount(text) {
    let wordsArr = text.trim().split(" ")
    let filteredWordArr = wordsArr.filter(word => word !=="")
  }

  return (
    <div>
        <h1>How fast do you type?</h1>
        <textarea
            onChange={handleChange}
            value={text}
        />
        <h4>Time reminaing: ???</h4>
        <button>Start</button>
        <h1>Word count: ???</h1>
    </div>
  )
}

export default App