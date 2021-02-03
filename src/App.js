import { Todo } from './components/Todo'

import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Todo />
    </div>
  )
}

export default App

// const url = `https://jsonplaceholder.typicode.com/users`
const url_ = 'https://sc.smartalmaty.kz/sc-children-activities/api/activities'
