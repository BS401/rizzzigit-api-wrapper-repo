import type { Client } from './client'

export class API {
  public constructor (client: Client) {
    this.#client = client
    this.#localStorage = localStorage
  }

  #client: Client
  #localStorage: Storage

  public async request (url: URL, options: {
    body?: string | FileList[0] | Record<string, unknown>
    method: 'POST' | 'PUT' | 'DELETE' | 'GET'
    query?: Record<string, unknown>
  }): Promise<Record<string, any>> {
    {
      const { searchParams } = url

      if (!searchParams.has('session-id')) {
        const sessionId = this.#localStorage.getItem('session-id')

        if (sessionId != null) {
          searchParams.set('session-id', sessionId)
        }
      }
    }

    const { body, method } = options

    let response: Response
    if ((typeof (body) === 'string') || (body instanceof File)) {
      response = await fetch(url, { body, method })
    } else if (body != null) {
      const json = JSON.stringify(body)
      response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': `${json.length}`
        },
        body: json
      })
    } else {
      response = await fetch(url, { method })
    }

    const result = await response.json()
    if (result.status !== 200) {
      throw new Error(`HTTP ${result.status as string}`)
    }

    return result
  }
}
