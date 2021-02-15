import { createStore, combineReducers } from 'redux'

const type = {
  ADD: 'TODO/ADD',
  DELETE: 'TODO/DELETE',
  FILTER: 'TODO/FILTER',
  CHECKED: 'TODO/CHECKED',
  COLOR: 'TODO/COLOR',
}

const initialState = [
  { name: 'run', checked: false, completed: false, color: 'red' },
  { name: 'read', checked: false, completed: false, color: '' },
  { name: 'sleep', checked: false, completed: false, color: '' },
]

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD:
      return [...state, action.payload]
    case type.DELETE:
      return state.filter((todo) => todo.name !== action.payload)
    case type.FILTER:
      return state.filter((todo) => todo.name === action.payload)
    case type.CHECKED:
      return state.map((todo, key) =>
        key === action.payload ? { ...todo, checked: !todo.checked } : todo
      )
    case type.COLOR:
      return state.map((todo, key) =>
        key === action.payload.key
          ? { ...todo, color: action.payload.color }
          : todo
      )
    default:
      return state
  }
}

export const store = createStore(combineReducers({ todoReducer }))
