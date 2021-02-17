import { useState, useEffect } from 'react'
import { Button, InputNumber } from 'antd'

import './App.css'
import 'antd/dist/antd.css'

const worker = new Worker('worker.js')

function App() {
  const [num, setNum] = useState(0)
  const [fib, setFib] = useState(0)

  useEffect(() => {
    worker.onmessage = function (e) {
      if (e && e.data) {
        setFib(e.data)
      }
    }
  }, [])

  const onSubmit = () => {
    worker.postMessage(num)
  }

  console.log(fib)

  return (
    <div style={{ width: '100%' }}>
      <InputNumber min={0} max={100} onChange={(val) => setNum(val)} />
      <Button onClick={onSubmit}> click me</Button>
    </div>
  )
}

export default App
