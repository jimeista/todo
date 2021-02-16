import { type } from './types'

export const fetchStream = (payload) => {
  return {
    type: type.FETCH,
    payload: payload,
  }
}

export const fetchStreamFullfilled = (payload) => {
  return {
    type: type.FETCH_FULLFILLED,
    payload: payload,
  }
}

export const addTodo = (payload) => {
  return {
    type: type.ADD,
    payload: payload,
  }
}

export const deleteTodo = (payload) => {
  return {
    type: type.DELETE,
    payload: payload,
  }
}

export const filterTodo = (payload) => {
  return {
    type: type.FILTER,
    payload: payload,
  }
}

export const checkTodo = (payload) => {
  return {
    type: type.CHECKED,
    payload: payload,
  }
}

export const colorTodo = (payload) => {
  return {
    type: type.COLOR,
    payload: payload,
  }
}
