import { ofType } from 'redux-observable'
import { forkJoin, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { catchError, map, mapTo, mergeMap } from 'rxjs/operators'

import { fetchStream, fetchStreamFullfilled } from './actions'
import { type } from './types'

// let url = '/sc-air-pollution/api/averages?start=2021-02-09T23:00:00Z'
let url = 'https://jsonplaceholder.typicode.com/posts'

export const fetchStreamEpic = (action$) =>
  action$.pipe(
    ofType(type.FETCH),
    mergeMap((action) =>
      ajax.getJSON(url).pipe(
        map((res) => {
          return fetchStreamFullfilled({ status: 'success', data: res })
        })
      )
    )
  )
