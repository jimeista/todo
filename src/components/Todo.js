import List, { useEffect } from './List'
import oboe from 'oboe'

import TodoForm from './Form'

export const Todo = () => {
  // useEffect(() => {
  //   let url =
  //     'https://sc.smartalmaty.kz/sc-air-pollution/api/averages?start=2021-02-09T23:00:00Z'

  //   oboe(url).node('!', (o) => {
  //     console.log(o)
  //   })
  // }, [])

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
      <TodoForm />
      <List />
    </div>
  )
}
