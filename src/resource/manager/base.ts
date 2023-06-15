import type { BaseResource } from '../data/base'
import type { MainManager } from '../main'

export abstract class BaseManager<R extends BaseResource<R, M>, M extends BaseManager<R, M>> {
  public constructor (main: MainManager, name: string) {
    this.#main = main
    this.#name = name
  }

  #main: MainManager
  #name: string

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
