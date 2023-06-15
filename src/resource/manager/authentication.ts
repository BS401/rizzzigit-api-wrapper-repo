import type { AuthenticationResource } from '../data/authentication.js'
import type { MainManager } from '../main.js'
import { BaseManager } from './base.js'

export class AuthenticationManager extends BaseManager<AuthenticationResource, AuthenticationManager> {
  public constructor (main: MainManager) {
    super(main, 'Authentication')

    this.#storage = localStorage
  }

  #storage: Storage

  get #sessionId (): string | null {
    return this.#storage.getItem('session-id')
  }

  set #sessionId (id: string | null) {
    if (id == null) {
      this.#storage.removeItem('session-id')
      return
    }

    this.#storage.setItem('session-id', id)
  }

  public async isAuthorized (): Promise<boolean> {
    const sessionId = this.#sessionId
    if (sessionId == null) {
      return false
    }

    try {
      const response = await this.main.client.api.request(this.generateURL(['a'], {
        'session-id': sessionId
      }), {
        method: 'GET'
      })

      if (response.status !== 200) {
        this.#sessionId = null

        return false
      }

      return true
    } catch {
      this.#sessionId = null

      return false
    }
  }

  public async logout (): Promise<void> {
    const sessionId = this.#sessionId
    if (sessionId == null) {
      return
    }

    await this.main.client.api.request(this.generateURL(['a', 'logout'], {
      'session-id': sessionId
    }), {
      method: 'POST'
    })
  }

  public async login (username: string, password: string): Promise<void> {
    if (this.#sessionId != null) {
      try {
        await this.logout()
      } catch {
        //
      }
    }

    const { data: { sessionId } } = await this.main.client.api.request(this.generateURL(['a']), {
      method: 'POST',
      body: { username, password }
    })

    this.#sessionId = sessionId
  }
}
