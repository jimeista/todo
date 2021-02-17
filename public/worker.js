onmessage = function (e) {
  console.log(e.data)
  postMessage('hello')
}

// const subject = new BehaviorSubject()
// let url = '/sc-air-pollution/api/averages?start=2021-02-09T23:00:00Z'

// onmessage = function (e) {
//   store.init()
//   store.fetch()

//   subject.subscribe((o) => postMessage(o))
// }

// const initialState = []

// const store = {
//   initialState,
//   init: () => subject.next(initialState),
//   fetch: () => {
//     oboe(url).done((o) => subject.next(o))
//   },
// }
