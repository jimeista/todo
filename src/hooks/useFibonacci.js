import { useWorker } from './useWorker'
import { fibonacci } from '../utils/helper'

export const useFibonacci = () => {
  return useWorker(fibonacci)
}
