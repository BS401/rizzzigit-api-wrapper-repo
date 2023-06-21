import type { BaseResource } from '../data/base.js'
import type { MainManager } from '../main.js'
import type { ClientEventEmitter } from '../../Wrapper.js'

export abstract class BaseManager<R extends BaseResource<R, M>, M extends BaseManager<R, M>> {
  public constructor (main: MainManager, events: ClientEventEmitter, name: string) {
    this.#main = main
    this.#name = name

    this.#cache = {}
  }

  #main: MainManager
  #name: string
  #cache: Record<string, R>

  public getCache (id: string): R | null {
    return this.#cache[id]
  }

  public setCache (id: string, resource: R): R {
    return (this.#cache[id] = resource)
  }

  protected generateURL (path: string[], getQuery?: Record<string, unknown>): URL {
    const url = new URL(`${this.#main.client.options.baseUrl}`)
    url.pathname = `/${path.join('/')}`

    if (getQuery != null) {
      for (const key in getQuery) {
        if (getQuery[key] != null) {
          url.searchParams.set(key, `${getQuery[key] as string}`)
        }
      }
    }

    return url
  }

  public get main (): MainManager { return this.#main }
  public get name (): string { return this.#name }
}
