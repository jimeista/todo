import List from './List'

import TodoForm from './Form'

export const Todo = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '50%',
        border: '1px solid black',
        margin: 20,
        maxHeight: '60vh',
        margin: 'auto',
      }}
    >
      <h1>Rxjs Todos</h1>
      <TodoForm />
      <List />
    </div>
  )
}
