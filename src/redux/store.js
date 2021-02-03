import { createStore } from 'redux'

const type = {
  ADD: 'TODO/ADD',
  DELETE: 'TODO/DELETE',
  FILTER: 'TODO/FILTER',
}

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD:
      return [...state, action.payload]
    case type.DELETE:
      return state.filter((s) => s !== action.payload)
    case type.FILTER:
      return state.filter((s) => s === action.payload)
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
