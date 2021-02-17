import { useWorker } from './useWorker'

import { fetch } from '../utils/fetch'

export const useFetch = () => {
  return useWorker(fetch)
}
