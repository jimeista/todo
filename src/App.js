import { useEffect, useState } from 'react'
import { store } from './store'

import Header from './components/Header'
import './Main.css'
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

  return (
    <div className='ChildSection_main'>
      <div className='ChildSection_wrapper'>
        <div className='ChildSection_title_wrap'>
          <span className='ChildSection_title'>Кружки и секции</span>
        </div>
        <div className='ChildSection_block'>
          <div className='ChildSection_RoundCHartBlock_wrap'>{doughnutco}</div>
        </div>
      </div>
    </div>
  )
}

export default App

// const url = `https://jsonplaceholder.typicode.com/users`
const url_ = 'https://sc.smartalmaty.kz/sc-children-activities/api/activities'
