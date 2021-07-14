import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const StatisticsLine = ({ text, value }) => {
  if (text === 'positive'){
    return(
      <div>
        {text} {value} %
      </div>
    )
  }
  return (
    <div>
      {text} {value}
    </div>
  )
}
const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine text='good' value={props.good} />
      <StatisticsLine text='neutral' value={props.neutral} />
      <StatisticsLine text='bad' value={props.bad} />
      <StatisticsLine text='all' value={props.all} />
      <StatisticsLine text='average' value={((props.good * 1) + (props.neutral * 0) + (props.bad * (-1))) / props.all} />
      <StatisticsLine text='positive' value={props.good / props.all} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
      />
    </div>
  )
}

export default App