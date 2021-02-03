import { useState, useEffect } from 'react'

import List from './List'
import TodoForm from './Form'

export const Todo = () => {
  const [todos, setTodos] = useState([
    { name: 'run', checked: false, completed: false, color: 'red' },
    { name: 'read', checked: false, completed: false, color: '' },
    { name: 'sleep', checked: false, completed: false, color: '' },
  ])

  console.log(todos)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '50%',
        border: '1px solid black',
        margin: 20,
      }}
    >
      <h1>Todos</h1>
      <TodoForm setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}
