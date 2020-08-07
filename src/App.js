import React from "react"
import useLogic from "./useLogic"
import "./App.css"


function App() {
  const {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount} = useLogic()

  return (
    <div>
        <h1>How fast do you type?</h1>
        <textarea
            ref={textBoxRef}
            onChange={handleChange}
            value={text}
            disabled={!isTimeRunning}
        />
        <h4>Time reminaing: {timeRemaining} </h4>
        <button
          onClick={startGame}
          disabled={isTimeRunning}
        >
          Start
        </button>
        <h1>Word count: {wordCount} </h1>
    </div>
  )
}

export default App