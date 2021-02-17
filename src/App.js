import { useState, useEffect } from 'react'
import { Button, InputNumber } from 'antd'

import './App.css'
import 'antd/dist/antd.css'

const worker = new Worker('worker.js')

function App() {
  const [data, setData] = useState(0)

  useEffect(() => {
    worker.postMessage('hi there')
    worker.onmessage = function (e) {
      if (e && e.data) {
        console.log(e.data)
      }
    }
  }, [])

  return <div style={{ width: '100%' }}></div>
}

export default App
