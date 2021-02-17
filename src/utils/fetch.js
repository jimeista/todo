import axios from 'axios'

const fetch = (url) => {
  return axios.get(url).then((r) => r.data)
}

export { fetch }
