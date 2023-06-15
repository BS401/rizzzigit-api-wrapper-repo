import type { Client } from './client.js'

export class API {
  public constructor (client: Client, customLocalStorage?: Storage) {
    this.#client = client
    this.#localStorage = customLocalStorage ?? localStorage
  }

  #client: Client
  #localStorage: Storage

  public async request (url: URL, options: {
    body?: string | FileList[0] | ArrayBuffer | Record<string, unknown>
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
    if (
      (typeof (body) === 'string') ||
      (body instanceof Uint8Array) ||
      (body instanceof ArrayBuffer) ||
      (
        (typeof (File) !== 'undefined') &&
        (body instanceof File)
      )
    ) {
      response = await fetch(url, { body, method })
    } else if (body != null) {
      const json = Uint8Array.from(new TextEncoder().encode(JSON.stringify(body)))
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
      throw Object.assign(new Error(`HTTP ${result.status as string}`), {
        data: result
      })
    }

    return result
  }
}
