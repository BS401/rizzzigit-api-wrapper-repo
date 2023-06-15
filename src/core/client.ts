import { MainManager } from '../resource/main.js'
import { API } from './api.js'

export interface ClientOptions {
  baseUrl: string
  storage?: Storage
}

export class Client {
  static get pathArray (): string[] {
    const array: string[] = []
    if (typeof (document) === 'undefined') {
      return array
    }

    for (let entry of document.location.pathname.split('/')) {
      entry = entry.trim().toLowerCase()

      if (entry.length === 0) {
        continue
      }

      array.push(entry)
    }

    return array
  }

  static #instance?: Client
  public static getInstance (): Client {
    return this.#instance ?? (this.#instance = new this())
  }

  public constructor (options?: Partial<ClientOptions>) {
    this.#options = {
      baseUrl: 'https://twice-api.cjoma.repl.co/',

      ...options
    }

    this.#api = new API(this, this.#options.storage)
    this.#resources = new MainManager(this)
  }

  #options: ClientOptions
  #api: API
  #resources: MainManager

  public get options (): ClientOptions { return this.#options }
  public get api (): API { return this.#api }
  public get resources (): MainManager { return this.#resources }
}

if (typeof (window) !== 'undefined') {
  Object.assign(window, { Client })
}
