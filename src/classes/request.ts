import fetch from 'cross-fetch'

export default class Request {
  static get = async <T>(url: string, headers?: RequestInit): Promise<T> => {
    const fetchResponse = await fetch(url, headers)
    const fetchData = await fetchResponse.json()
    return fetchData
  }
}
