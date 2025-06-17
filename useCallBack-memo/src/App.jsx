import React, { useCallback, useState } from 'react'
import Todo from './Todo'

const App = () => {

  const [todo, setTodo] = useState([])
  const [counter, setCounter] = useState(0)

  const addTask = useCallback(() => {
    setTodo((pre) => [...pre, "new tasks"])
  }, [todo])

  const incre =() => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={incre}>+</button>

      <br /><br />

      <h1>Todo list</h1>
      <Todo todoList={todo} setTodo={addTask} />
    </>
  )
}

export default App
