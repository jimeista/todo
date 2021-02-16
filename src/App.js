import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { type } from './redux/types'

import { Todo } from './components/Todo'

import './App.css'
import 'antd/dist/antd.css'

function App() {
  const state = useSelector((state) => state.todoReducer)
  console.log(state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: type.FETCH, payload: 'loading' })
  }, [dispatch])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Todo />
    </div>
  )
}

export default App
