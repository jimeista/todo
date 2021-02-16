import { BehaviorSubject } from 'rxjs'
import oboe from 'oboe'

const subject = new BehaviorSubject()

subject.next([])

export const store = {
  init: () => {
    let url =
      'https://sc.smartalmaty.kz/sc-air-pollution/api/averages?start=2021-02-09T23:00:00Z'
    oboe(url).done((o) => {
      let data = subject.getValue()
      subject.next([...data, o])
    })
  },
  subscribe: (setState) => subject.subscribe(setState),
  unsubscribe: (setState) => subject.unsubscribe(setState),
}
