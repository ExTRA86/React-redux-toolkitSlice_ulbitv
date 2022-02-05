import "./App.css"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addTodo,
  decrement,
  increment,
  removeLastTodo,
} from "./toolkitRedux/toolkitSlice"

function App() {
  const count = useSelector(state => state.toolkit.count)
  const todos = useSelector(state => state.toolkit.todos)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Счетчик {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>Добавить Todo</button>
      <button onClick={() => dispatch(removeLastTodo())}>Удалить Todo</button>

      <ul>
        {todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
