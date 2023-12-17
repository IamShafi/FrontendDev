import React from 'react'

const Project2 = () => {
    const [count, setCount] = React.useState(0)

  const decrease = () => {
    setCount(prevCount => prevCount - 1)
  }
  const reset = () => {
    setCount(0)
  }
  const increase = () => {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <div className="container">
      <h1>counter</h1>
      <span id="value">{count}</span>
      <div className="button-container">
        <button className="btn decrease" onClick={decrease}>decrease</button>
        <button className="btn reset" onClick={reset}>reset</button>
        <button className="btn increase" onClick={increase}>increase</button>
      </div>
    </div>
  )
}

export default Project2
