import { BehaviorSubject } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

const subject = new BehaviorSubject()

const initialState = {
  status: 'success',
  data: [
    { name: 'run', checked: false, completed: false, color: 'red' },
    { name: 'read', checked: false, completed: false, color: '' },
    { name: 'sleep', checked: false, completed: false, color: '' },
  ],
}

export const store = {
  initialState,

  init: () => subject.next(initialState),
  subscribe: (setState) => subject.subscribe(setState),
  unsubscribe: (setState) => subject.unsubscribe(setState),

  delete: (name) => {
    let state_ = subject.getValue()

    subject.next({
      ...state_,
      data: state_.data.filter((i) => i.name !== name),
    })
  },

  add: (payload) => {
    let state_ = subject.getValue()

    subject.next({ ...state_, data: [payload, ...state_.data] })
  },

  checked: (key) => {
    let state_ = subject.getValue()
    subject.next({
      ...state_,
      data: state_.data.map((i, index) =>
        index === key ? { ...i, checked: !i.checked } : i
      ),
    })
  },

  color: (color, key) => {
    let state_ = subject.getValue()
    subject.next({
      ...state_,
      data: state_.data.map((i, index) =>
        index === key ? { ...i, color } : i
      ),
    })
  },

  fetch: () => {
    let obs$ = ajax
      .getJSON('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((res) => res))

    obs$.subscribe((data) => {
      let state_ = subject.getValue()

      subject.next({
        status: 'success',
        data: [
          ...state_.data,
          ...data.slice(0, 10).map((i) => ({
            name: i.title,
            checked: false,
            completed: false,
            color: '',
          })),
        ],
      })
    })
  },

  getState: () => subject.getValue(),
}
