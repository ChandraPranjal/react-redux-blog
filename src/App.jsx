import React from 'react'
import Counter from './components/Counter'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const clickHandler = (e) => {
    if (e.target.name === "INCREMENT")
      dispatch({ type: e.target.name})
    else
      dispatch({ type: e.target.name })
  }
  return (
    <div>
      <button name="INCREMENT" onClick={clickHandler}>Increment</button>
      <Counter />
      <button name="DECREMENT" onClick={clickHandler}>Decrement</button>
    </div>
  )
}

export default App
