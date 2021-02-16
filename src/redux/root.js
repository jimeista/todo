import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import {} from './epics'
import { todoReducer } from './reducer'

export const rootEpics = combineEpics()

export const rootReducers = combineReducers({
  todoReducer,
})
