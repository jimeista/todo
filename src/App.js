import { Todo } from './components/Todo'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import { Demo } from './components/Chart'

import './App.css'
import 'antd/dist/antd.css'

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Todo />
      </div>
      {/* <Demo /> */}
    </Provider>
  )
}

export default App
