import { useState } from 'react'
import { Button, InputNumber } from 'antd'

import { useFibonacci } from './hooks/useFibonacci'

import './App.css'
import 'antd/dist/antd.css'

let url = 'https://jsonplaceholder.typicode.com/comments'

function App() {
  const [num, setNum] = useState(0)

  const { result, run } = useFibonacci()

  const onSubmit = () => {
    run(num)
  }

  return (
    <div style={{ width: '100%' }}>
      <InputNumber min={0} max={100} onChange={(val) => setNum(val)} />
      <Button onClick={onSubmit}>calculate</Button>

      <p>{result}</p>
    </div>
  )
}

export default App
