import { type } from './types'

const initialState = {
  status: 'idle',
  data: [
    { name: 'run', checked: false, completed: false, color: 'red' },
    { name: 'read', checked: false, completed: false, color: '' },
    { name: 'sleep', checked: false, completed: false, color: '' },
  ],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD:
      return { ...state, data: [...state.data, action.payload] }
    case type.DELETE:
      return {
        ...state,
        data: state.data.filter((todo) => todo.name !== action.payload),
      }
    case type.FILTER:
      return {
        ...state,
        data: state.data.filter((todo) => todo.name === action.payload),
      }
    case type.CHECKED:
      return {
        ...state,
        data: state.data.map((todo, key) =>
          key === action.payload ? { ...todo, checked: !todo.checked } : todo
        ),
      }
    case type.COLOR:
      return {
        ...state,
        data: state.data.map((todo, key) =>
          key === action.payload.key
            ? { ...todo, color: action.payload.color }
            : todo
        ),
      }
    case type.FETCH:
      return { ...state, status: action.payload }
    case type.FETCH_FULLFILLED:
      // let data = action.payload.data.slice(0, 10)
      let data = action.payload.data
      return {
        status: action.payload.status,
        data: [
          ...state.data,
          ...data.map((i) => ({
            name: i.title,
            checked: false,
            completed: false,
            color: '',
          })),
        ],
      }

    case type.FETCH_ERROR:
      return { ...state, status: 'error' }
    default:
      return state
  }
}
