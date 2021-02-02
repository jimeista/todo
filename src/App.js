import { useEffect, useState } from 'react'
import { store } from './store'

import './App.css'
import 'antd/dist/antd.css'

function App() {
  const [data, setData] = useState(store.initialState)

  useEffect(() => {
    store.subscribe(setData)
    store.init(url_)
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return <div>Redux</div>
}

export default App

// const url = `https://jsonplaceholder.typicode.com/users`
const url_ = 'https://sc.smartalmaty.kz/sc-children-activities/api/activities'
