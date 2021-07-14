import React, { useState } from 'react'

/*const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
*/
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
  /*
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
  
    const handleLeftClick = () => {
      setAll(allClicks.concat('L'))
      setLeft(left + 1)
    }
  
    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      setRight(right + 1)
    }
  
    return (
      <div>
        <div>
          {left}
          <Button handleClick={handleLeftClick} text='left' />
          <Button handleClick={handleRightClick} text='right' />
          {right}
          <History allClicks={allClicks} />
        </div>
      </div>
    )*/
}

export default App