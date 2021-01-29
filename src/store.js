import { Subject } from 'rxjs'
import oboe from 'oboe'

let initialState = []

let state = initialState

const data$ = new Subject()

export const store = {
  subscribe: (setState) => data$.subscribe(setState),
  init: (url) => {
    oboe(url).node('!', (data_) => {
      state = [...state, data_]
      data$.next(state)
    })
  },
  initialState,
}
