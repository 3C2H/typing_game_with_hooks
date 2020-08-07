import {useState, useEffect, useRef} from 'react'

function useLogic() {

  const STARTING_TIME = 5    
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  
  function handleChange(event) {
    const {value} = event.target
    setText(value)    
  }

  function calculateWordCount(text) {
    let wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame() {
      setIsTimeRunning(false)
      setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }else if(timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return(
    {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount}
  )
}

export default useLogic