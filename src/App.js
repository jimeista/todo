import { useLayoutEffect, useState } from 'react'
import { store } from './oboe'

import { Todo } from './components/Todo'

import './App.css'
import 'antd/dist/antd.css'

function App() {
  const [state, setState] = useState([])

  useLayoutEffect(() => {
    store.init()
    store.subscribe(setState)
  }, [])

  console.log(state)
  return (
    <div style={{ width: '100%' }}>
      <Todo />
      <div style={{ width: '60%', margin: 'auto', marginTop: 20 }}>
        {state.map((i) => (
          <>{`code: ${i.code},date: ${i.date}`}</>
        ))}
      </div>
    </div>
  )
}

export default App
