import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { fetchStreamEpic } from './epics'
import { todoReducer } from './reducer'

export const rootEpics = combineEpics(fetchStreamEpic)

export const rootReducers = combineReducers({
  todoReducer,
})
