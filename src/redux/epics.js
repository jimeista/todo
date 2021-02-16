import { ofType } from 'redux-observable'
import { forkJoin, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { catchError, map, mapTo, mergeMap } from 'rxjs/operators'

import {} from './actions'
import {} from './types'

export const fetchIllnessEpic = (action$) =>
  action$.pipe(
    // ofType(LOGIN),
    mergeMap((action) =>
      forkJoin(
        ajax({
          //   url: LOGIN_URL,
          headers: {
            Authorization: `Basic ${action.payload.hash}`,
            'Content-Type': 'application/json',
          },
          crossDomain: true,
          withCredentials: false,
          method: 'GET',
          body: JSON.stringify({}),
        })
      ).pipe(
        mergeMap((response) =>
          of()
          // setUserData({
          //   payload: response[0].response,
          //   userHash: action.payload.hash,
          // }),
          // setRolesData(response[1].response)
        ),
        catchError((error) =>
          of({
            // type: FETCH_ILLNESS_DATA_ERROR,
            //   payload: error.xhr.response,
            payload: error.xhr.status,
            error: true,
          })
        )
      )
    )
  )
